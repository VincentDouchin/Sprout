import AssetManager from "../AssetManager";
import Buffer from "../utils/Buffer";
import getPlane from "../utils/Plane";
import * as planck from 'planck'
import * as THREE from 'three'
import { world, scene, } from '../Initialize'
import { indexToCoord, assignObjectProps, getFileName } from '../utils/Functions'
import Door from "./Door";
import Cow from "./Cow";
import { Vec2 } from "planck";
//! Types
interface collision {
	width: number;
	height: number;
	x: number;
	y: number;
	properties: any;
}


const getMap = (name: string) => {
	const bodies: planck.Body[] = []
	const meshes: THREE.Mesh[] = []
	const entities = []

	const map = AssetManager.levels[name]
	const collisions: collision[] = []
	const getMapBuffer = (): CanvasRenderingContext2D => Buffer(map.width * map.tilewidth, map.height * map.tileheight)
	const bufferBottom = getMapBuffer()
	const bufferTop = getMapBuffer()

	map.layers.filter((layer: any) => layer.type == 'tilelayer').forEach(layer => {
		const selectedBuffer = layer.offsetx == 0 ? bufferTop : bufferBottom

		layer.chunks.forEach((chunk: any) => {

			chunk.data.forEach((tile: any, tileIndex: number) => {
				if (tile == 0) return
				const tileset = map.tilesets.find(tileset => tileset.firstgid <= tile && tile <= tileset.firstgid + tileset.tilecount - 1)
				if (!tileset) return

				const [sx, sy] = indexToCoord(tile - tileset.firstgid, tileset.columns, tileset.tilewidth, tileset.tileheight)
				const [dx, dy] = indexToCoord(tileIndex, chunk.width, map.tilewidth, map.tileheight)
				const dxCorrected = dx + chunk.x * map.tilewidth
				const dyCorrected = dy + chunk.y * map.tileheight
				//! Collisions
				const tileObjects = tileset.tiles?.find((_tile: any) => _tile.id == tile - tileset.firstgid)?.objectgroup?.objects
				if (tileObjects) {
					tileObjects.forEach((tileObject: any) => {

						const collision: collision = {
							width: tileObject.width,
							height: tileObject.height,
							x: dxCorrected + tileObject.x + tileObject.width / 2,
							y: dyCorrected + tileObject.y + tileObject.height / 2,
							properties: assignObjectProps(tileObject)
						}
						collisions.push(collision)
					})
				}
				selectedBuffer!.drawImage(tileset.img,
					sx, sy, map.tilewidth, map.tileheight,
					dxCorrected, dyCorrected, tileset.tilewidth, tileset.tileheight
				)
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
			Object.assign(newObject, assignObjectProps(object))
			mapObjects[layer.name].push(newObject)
		})
	})
	//! Teleports

	// const teleports = map.layers.find((x: any) => x.name == 'teleports').objects.map((object: any) => ({
	// 	...AssetManager.templates.teleport.default.object,
	// 	...object,
	// 	properties: { ...assignObjectProps(object), type: 'teleport' }
	// }))
	//! Meshes
	const meshTop = getPlane({ buffer: bufferTop })
	const meshBottom = getPlane({ buffer: bufferBottom })
	meshTop.renderOrder = 10
	meshBottom.renderOrder = 0
	meshes.push(meshTop)
	meshes.push(meshBottom)
	scene.add(meshTop)
	scene.add(meshBottom)

	//! Add collisions

	const collisionBody = world.createBody({
		type: 'static',
		position: planck.Vec2(0, 0)
	})
	bodies.push(collisionBody)
	collisions.forEach(({ width, height, x, y }) => {
		const newX = x - map.width * map.tilewidth / 2
		const newY = map.height * map.tileheight / 2 - y
		const collisionFixture = collisionBody.createFixture({
			shape: planck.Box(width / 2, height / 2, planck.Vec2(newX, newY), 0.0),
			density: 0.0
		})
		collisionFixture.setUserData({ collision: true })

	})


	//! Add entities
	if ('entities' in mapObjects) {

		mapObjects['entities'].filter(object => object.name == 'spawn').forEach(object => {
			const newX = object.x - map.width * map.tilewidth / 2 + object.width / 2
			const newY = map.height * map.tileheight / 2 - object.y - object.height / 2
			const cow = Cow(Vec2(newX, newY), 'Light')
			entities.push(cow)

		})
	}

	//! Add teleports
	const mapTeleports = []

	mapObjects['teleports'].forEach((teleport: any) => {

		const newX = teleport.x - map.width * map.tilewidth / 2 + teleport.width / 2
		const newY = map.height * map.tileheight / 2 - teleport.y - teleport.height / 2

		const position = planck.Vec2(newX, newY)

		const teleportBody = world.createBody({
			type: 'static',
			position
		})
		bodies.push(teleportBody)


		const teleportFixture = teleportBody.createFixture({
			shape: planck.Box(teleport.width / 2, teleport.height / 2, planck.Vec2(0, 0), 0),
			density: 0,
			isSensor: true
		})
		const userData = { ...teleport, type: 'teleport', position, }
		if (teleport.door) {
			const door = Door()
			door.mesh.position.x = newX
			door.mesh.position.y = newY
			meshes.push(door.mesh)
			Object.assign(userData, { object: door })

		}

		teleportFixture.setUserData(userData)
		mapTeleports.push(teleportFixture)

	})

	let loaded = true
	const getTeleport = (teleportName: string) => {

		return mapTeleports.find(fixture => fixture.getUserData().name == teleportName)?.getUserData()
	}
	const unLoad = () => {
		bodies.forEach(body => world.destroyBody(body))
		meshes.forEach((mesh: THREE.Mesh) => scene.remove(scene.getObjectById(mesh.id)))

		loaded = false
	}
	const update = () => {
		mapTeleports.forEach(teleport => teleport.getUserData()?.object && teleport.getUserData().object.update())
		entities.forEach(entity => entity.update())
	}
	return { meshTop: meshTop, meshBottom: meshBottom, collisions, getTeleport, unLoad, loaded, update }
}
export default getMap