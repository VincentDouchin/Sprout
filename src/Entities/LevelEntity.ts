import AssetManager from "../AssetManager"
import { Entity } from "../ECS"
import Body from "../Components/BodyComponent"
import Buffer from "../utils/Buffer";

import { indexToCoord, assignObjectProps, getFileName, getRadianAngle } from '../utils/Functions'

// import Cow from "./Cow";
import { Vec2, Box } from "planck";
import EntityCollectionComponent from "../Components/EntityCollectionComponent";
import DataComponent from "../Components/DataComponent";
import SpriteComponent from "../Components/SpriteComponent";
import TeleportEntity from "./TeleportEntity";
import PlantEntity from "./PlantEntity";
import CowEntity from "./CowEntity";
import PositionComponent from "../Components/PositionComponent";


// //! Types

const flags = [0xc0000000, 0xb0000000, 0xa0000000, 0x80000000, 0x40000000, 0x20000000]


const LevelEntity = (name: string) => {
	const map = AssetManager.levels[name]
	// + Body
	const body = new Body({
		type: 'static',
		position: Vec2(0, 0),
		allowSleep: false,
		buller: true
	})
	// + Canvas


	const getTileset = id => map.tilesets.find(tileset => tileset.firstgid <= id && id <= tileset.firstgid + tileset.tilecount - 1)
	const mapEntities = map.layers.filter((layer: any) => layer.type == 'objectgroup').flatMap((layer: any) => {
		Object.assign(layer, assignObjectProps(layer))
		return layer.objects.flatMap((object: any) => {
			const newObject = {}
			if (object.gid) {
				const tileset = getTileset(object.gid)
				const tile = tileset.tiles[object.gid - tileset.firstgid]
				Object.assign(newObject, tile)
				Object.assign(newObject, assignObjectProps(tile))
			}
			if (object.template) {
				Object.assign(newObject, AssetManager.templates[getFileName(object.template)])
			}
			Object.assign(newObject, object)
			Object.assign(newObject, { x: object.x - map.width * map.tilewidth / 2 + object.width / 2, y: map.height * map.tileheight / 2 - object.y + object.height / 2 })
			Object.assign(newObject, assignObjectProps(object))
			return newObject
		})
	})

	const collection = new EntityCollectionComponent(...mapEntities
		.filter((object: any) => object.entity)
		.map((object: any) => {
			switch (object.entity) {
				case 'teleport': return TeleportEntity(object)
				case 'farmable': return PlantEntity(object)
				case 'cow': return CowEntity(object)

			}
		})
		.filter(entity => entity)
	)
	const getMapBuffer = (): CanvasRenderingContext2D => Buffer(map.width * map.tilewidth, map.height * map.tileheight)
	const finalTopBuffer = getMapBuffer()
	const finalBottomBuffer = getMapBuffer()

	map.layers.filter((layer: any) => layer.type == 'tilelayer').forEach((layer: any) => {
		Object.assign(layer, assignObjectProps(layer))
		const buffer = getMapBuffer()

		layer.chunks.forEach((chunk: any) => {

			chunk.data.forEach((tile: number, tileIndex: number) => {
				if (tile === 0) return


				let idOffset: number = flags.find(flag => tile > flag) ?? 0
				const realTileNb: number = tile - idOffset
				const tileset = getTileset(realTileNb)
				if (!tileset) return


				const [sx, sy] = indexToCoord(realTileNb - tileset.firstgid, tileset.columns, tileset.tilewidth, tileset.tileheight)
				const [chunkX, chunkY] = indexToCoord(tileIndex, chunk.width, map.tilewidth, map.tileheight)
				const dx = chunkX + chunk.x * map.tilewidth
				const dy = chunkY + chunk.y * map.tileheight

				//! Collisions
				const tileObjects = tileset.tiles?.find((_tile: any) => _tile.id == realTileNb - tileset.firstgid)?.objectgroup?.objects
				if (tileObjects) {
					tileObjects.forEach((tileObject: any) => {
						const x = dx + tileObject.x + tileObject.width / 2 - map.width * map.tilewidth / 2
						const y = - dy - tileObject.y - tileObject.height / 2 + map.height * map.tileheight / 2

						body.body.createFixture({
							shape: Box(tileObject.width / 2, tileObject.height / 2, Vec2(x, y), 0.0),
							density: 0.0
						})
					})
				}

				if (!idOffset) {

					buffer!.drawImage(tileset.img,
						sx, sy, map.tilewidth, map.tileheight,
						dx, dy, tileset.tilewidth, tileset.tileheight
					)
				} else {

					const selectedFlag = idOffset / flags.at(-1)
					const tempBuffer = Buffer(tileset.tilewidth, tileset.tileheight)
					tempBuffer.drawImage(tileset.img,
						sx, sy, map.tilewidth, map.tileheight,
						0, 0, tileset.tilewidth, tileset.tileheight)
					buffer.save()

					switch (selectedFlag) {
						case 1: {
							buffer.translate(map.width * map.tilewidth - tileset.tilewidth, map.height * map.tileheight - tileset.tileheight)
							buffer.scale(-1, -1)
						} break
						case 2: {
							buffer.translate(0, map.height * map.tileheight - tileset.tileheight)
							buffer.scale(1, -1)
						} break
						case 4: {
							buffer.scale(-1, 1)
							buffer.translate(map.width * map.tilewidth - tileset.tilewidth, 0)
						} break

						case 5: {
							buffer.translate(dx + tileset.tilewidth, dy)
							buffer.rotate(getRadianAngle(90))
						} break
						case 5.5: {
							buffer.translate(dx, dy + tileset.tileheight)
							buffer.rotate(getRadianAngle(270))
						} break
						case 6: {
							buffer.translate(dx + tileset.tilewidth, dy + tileset.tileheight)
							buffer.rotate(getRadianAngle(180))
						} break
					}



					buffer!.drawImage(tempBuffer.canvas,
						0, 0, tileset.tilewidth, tileset.tileheight,
						0, 0, tileset.tilewidth, tileset.tileheight
					)
					buffer.restore()

				}
			})
		})

		const finalBuffer = layer.top ? finalTopBuffer : finalBottomBuffer
		finalBuffer.drawImage(buffer.canvas, 0, 0)
	})
	// +Mesh

	collection.addEntities(
		new Entity(
			new SpriteComponent(finalBottomBuffer, { renderOrder: 0 }),
			new PositionComponent(0, 0)
		),
		new Entity(
			new SpriteComponent(finalTopBuffer, { renderOrder: 6 }),
			new PositionComponent(0, 0)
		)
	)
	return new Entity(
		body,
		collection,
		new DataComponent({ name })

	)
}
// create(name: string) {
// 	const bodies: planck.Body[] = []
// 	const meshes: THREE.Mesh[] = []
// 	const map = AssetManager.levels[name]
// 
// 	const bufferBottom = getMapBuffer()
// 	const bufferTop = getMapBuffer()
// 	const collisionBody = Body.create({
// 		type: 'static',
// 		position: Vec2(0, 0)
// 	})
// 	bodies.push(collisionBody)




// 	})

// 	//! Objects
// 	const mapObjects = {}
// 	map.layers.filter((layer: any) => layer.type == 'objectgroup').forEach((layer: any) => {
// 		if (!(layer.name in mapObjects)) mapObjects[layer.name] = []
// 		layer.objects.forEach((object: any) => {
// 			const newObject = {}
// 			if (object.template) {
// 				Object.assign(newObject, AssetManager.templates[getFileName(object.template)])

// 			}
// 			Object.assign(newObject, object)
// 			Object.assign(newObject, { x: object.x - map.width * map.tilewidth / 2, y: map.height * map.tileheight / 2 - object.y })
// 			Object.assign(newObject, assignObjectProps(object))
// 			mapObjects[layer.name].push(newObject)
// 		})
// 	})

// 	//! Meshes
// 	const meshTop = getPlane({ buffer: bufferTop })
// 	const meshBottom = getPlane({ buffer: bufferBottom })
// 	meshTop.renderOrder = 10
// 	meshBottom.renderOrder = 0
// 	meshes.push(meshTop)
// 	meshes.push(meshBottom)
// 	scene.add(meshTop)
// 	scene.add(meshBottom)

// 	//! Add entities


// 	const entities = mapObjects?.['entities']?.filter(object => object.name == 'spawn').map(object => {
// 		const newX = object.x + object.width / 2
// 		const newY = object.y - object.height / 2
// 		return Cow.create({ x: newX, y: newY }, 'Light')
// 	})
// 	//! Add farming
// 	const farming = mapObjects?.['farming']?.map(object => {
// 		const newX = object.x + object.width / 2
// 		const newY = object.y - object.height / 2
// 		return Plant.create({ x: newX, y: newY }, 'carrot')
// 	})


// 	//! Add teleports
// 	const teleports = mapObjects['teleports'].map(Teleport.create)

// 	teleports.forEach(teleport => bodies.push(teleport.body))
// 	return {
// 		meshes,
// 		teleports,
// 		bodies,
// 		entities,
// 		farming

// 	}
// },
// unLoad(map) {
// 	map.meshes.forEach((mesh: THREE.Mesh) => scene.remove(mesh))
// 	map.teleports.forEach(teleport => Entity.destroy(teleport))
// 	map.bodies.forEach((body: planck.Body) => world.destroyBody(body))
// 	if (map?.entities) {
// 		map.entities.forEach((entity) => Entity.destroy(entity))

// 	}
// },
// getTeleport(map, teleportName) {
// 	return map.teleports.find((teleport) => teleport.data.name == teleportName)

// }

// }

export default LevelEntity