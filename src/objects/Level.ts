import AssetManager from "../AssetManager";
import Buffer from "../utils/Buffer";
import getPlane from "../utils/Plane";
import { scene, world, } from '../Initialize'
import { indexToCoord, assignObjectProps, getFileName } from '../utils/Functions'

import Cow from "./Cow";
import { Vec2, Box } from "planck";
import Teleport from "./Teleport";
import Body from "../Components/Body";
import { Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import Sprite from "../Components/Sprite";
import Plant from "./Plant";
import Entity from "../Components/Entity";

//! Types
interface collision {
	width: number;
	height: number;
	x: number;
	y: number;
	properties: any;
}

const flags = [0xc0000000, 0xb0000000, 0xa0000000, 0x80000000, 0x40000000, 0x20000000]
const getRadianAngle = (degreeValue: number) => degreeValue * Math.PI / 180


const Level = {
	create(name: string) {
		const bodies: planck.Body[] = []
		const meshes: THREE.Mesh[] = []
		const map = AssetManager.levels[name]
		const getMapBuffer = (): CanvasRenderingContext2D => Buffer(map.width * map.tilewidth, map.height * map.tileheight)
		const bufferBottom = getMapBuffer()
		const bufferTop = getMapBuffer()
		const collisionBody = Body.create({
			type: 'static',
			position: Vec2(0, 0)
		})
		bodies.push(collisionBody)
		map.layers.filter((layer: any) => layer.type == 'tilelayer').forEach(layer => {

			const selectedBuffer = layer.properties?.some(prop => prop.name == 'top' && prop.value == true) ? bufferTop : bufferBottom


			layer.chunks.forEach((chunk: any) => {

				chunk.data.forEach((tile: number, tileIndex: number) => {
					if (tile === 0) return


					let idOffset: number = flags.find(flag => tile > flag) ?? 0
					const realTileNb: number = tile - idOffset
					const tileset = map.tilesets.find(tileset => tileset.firstgid <= realTileNb && realTileNb <= tileset.firstgid + tileset.tilecount - 1)
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

							collisionBody.createFixture({
								shape: Box(tileObject.width / 2, tileObject.height / 2, Vec2(x, y), 0.0),
								density: 0.0
							})
							// const mesh = new Mesh(
							// 	new PlaneGeometry(tileObject.width, tileObject.height),
							// 	new MeshBasicMaterial({ color: 0xFF0000 })
							// )
							// meshes.push(mesh)
							// mesh.position.x = x
							// mesh.position.y = y
							// mesh.position.z = 1
							// scene.add(mesh)

						})
					}

					if (!idOffset) {

						selectedBuffer!.drawImage(tileset.img,
							sx, sy, map.tilewidth, map.tileheight,
							dx, dy, tileset.tilewidth, tileset.tileheight
						)
					} else {

						const selectedFlag = idOffset / flags.at(-1)
						const tempBuffer = Buffer(tileset.tilewidth, tileset.tileheight)
						tempBuffer.drawImage(tileset.img,
							sx, sy, map.tilewidth, map.tileheight,
							0, 0, tileset.tilewidth, tileset.tileheight)
						selectedBuffer.save()

						switch (selectedFlag) {
							case 1: {
								selectedBuffer.translate(map.width * map.tilewidth - tileset.tilewidth, map.height * map.tileheight - tileset.tileheight)
								selectedBuffer.scale(-1, -1)
							} break
							case 2: {
								selectedBuffer.translate(0, map.height * map.tileheight - tileset.tileheight)
								selectedBuffer.scale(1, -1)
							} break
							case 4: {
								selectedBuffer.scale(-1, 1)
								selectedBuffer.translate(map.width * map.tilewidth - tileset.tilewidth, 0)
							} break

							case 5: {
								selectedBuffer.translate(dx + tileset.tilewidth, dy)
								selectedBuffer.rotate(getRadianAngle(90))
							} break
							case 5.5: {
								selectedBuffer.translate(dx, dy + tileset.tileheight)
								selectedBuffer.rotate(getRadianAngle(270))
							} break
							case 6: {
								selectedBuffer.translate(dx + tileset.tilewidth, dy + tileset.tileheight)
								selectedBuffer.rotate(getRadianAngle(180))
							} break
						}



						selectedBuffer!.drawImage(tempBuffer.canvas,
							0, 0, tileset.tilewidth, tileset.tileheight,
							0, 0, tileset.tilewidth, tileset.tileheight
						)
						selectedBuffer.restore()

					}
				})
			})

		})

		//! Objects
		const mapObjects = {}
		map.layers.filter((layer: any) => layer.type == 'objectgroup').forEach((layer: any) => {
			if (!(layer.name in mapObjects)) mapObjects[layer.name] = []
			layer.objects.forEach((object: any) => {
				const newObject = {}
				if (object.template) {
					Object.assign(newObject, AssetManager.templates[getFileName(object.template)])

				}
				Object.assign(newObject, object)
				Object.assign(newObject, { x: object.x - map.width * map.tilewidth / 2, y: map.height * map.tileheight / 2 - object.y })
				Object.assign(newObject, assignObjectProps(object))
				mapObjects[layer.name].push(newObject)
			})
		})

		//! Meshes
		const meshTop = getPlane({ buffer: bufferTop })
		const meshBottom = getPlane({ buffer: bufferBottom })
		meshTop.renderOrder = 10
		meshBottom.renderOrder = 0
		meshes.push(meshTop)
		meshes.push(meshBottom)
		scene.add(meshTop)
		scene.add(meshBottom)

		//! Add entities


		const entities = mapObjects?.['entities']?.filter(object => object.name == 'spawn').map(object => {
			const newX = object.x + object.width / 2
			const newY = object.y - object.height / 2
			return Cow.create({ x: newX, y: newY }, 'Light')
		})
		//! Add farming
		const farming = mapObjects?.['farming']?.map(object => {
			const newX = object.x + object.width / 2
			const newY = object.y - object.height / 2
			return Plant.create({ x: newX, y: newY }, 'carrot')
		})


		//! Add teleports
		const teleports = mapObjects['teleports'].map(Teleport.create)
		teleports.forEach(teleport => bodies.push(teleport.body))
		return {
			meshes,
			teleports,
			bodies,
			entities,
			farming

		}
	},
	unLoad(map) {
		map.meshes.forEach((mesh: THREE.Mesh) => scene.remove(mesh))
		map.teleports.forEach(teleport => Teleport.destroy(teleport))
		map.bodies.forEach((body: planck.Body) => world.destroyBody(body))
		// map.entities.forEach((entity) => Cow.destroy(entity))
	},
	getTeleport(map, teleportName) {
		return map.teleports.find((teleport) => teleport.data.name == teleportName)

	},
	update(map) {
		map.teleports.forEach(teleport => {
			if (teleport.sprite) Sprite.update(teleport.sprite)
		})
		map?.farming?.forEach(plant => Entity.update(plant))
	}
}

export default Level