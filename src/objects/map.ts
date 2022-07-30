import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import getPlane from "./plane";
import * as planck from 'planck'
import * as THREE from 'three'
import { world, scene } from '../Initialize'

//! Types
interface collision {
	width: number;
	height: number;
	x: number;
	y: number;
	properties: any;
}

const indexToCoord = (index, columns, width, height) => {
	height = height ?? width
	return [index % columns * width, Math.floor(index / columns) * height]
}
const assignObjectProps = tileObject => tileObject.properties?.reduce((acc, v) => ({ ...acc, [v.name]: v.value }), {}) ?? {}
const getMap = (name) => {


	const map = AssetManager.levels[name]
	const collisions: collision[] = []
	const getMapBuffer = (): CanvasRenderingContext2D => Buffer(map.width * map.tilewidth, map.height * map.tileheight)
	const bufferBottom = getMapBuffer()
	const bufferTop = getMapBuffer()

	map.layers.filter((x: any) => x.type == 'tilelayer').forEach(layer => {
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
				const tileObjects = tileset.tiles?.find(t => t.id == tile - tileset.firstgid)?.objectgroup?.objects
				if (tileObjects) {
					tileObjects.forEach(tileObject => {

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
	//! Teleports
	const teleports = map.layers.find((x: any) => x.name == 'teleports').objects.map(object => ({
		...object,
		...AssetManager.templates.teleport.default.object,
		properties: { ...assignObjectProps(object), type: 'teleport' }
	}))
	//! Meshes
	const meshTop = getPlane({ buffer: bufferTop })
	meshTop.renderOrder = 2
	const meshBottom = getPlane({ buffer: bufferBottom })
	meshBottom.renderOrder = 0

	scene.add(meshTop)
	scene.add(meshBottom)
	// document.body.appendChild(buffer.canvas)

	//! Add collisions
	const collisionsBody = world.createBody({
		type: 'static',
		position: planck.Vec2(0, 0)
	})
	collisions.forEach(({ width, height, x, y }) => {
		const newX = x - map.width * map.tilewidth / 2
		const newY = map.height * map.tileheight / 2 - y
		collisionsBody.createFixture(planck.Box(width / 2, height / 2, planck.Vec2(newX, newY), 0.0), 0.0);
	})

	//! Add teleports
	const teleportBody = world.createBody({
		type: 'static',
		position: planck.Vec2(0, 0)
	})

	teleports.forEach(({ width, height, x, y, properties },) => {

		const newX = x - map.width * map.tilewidth / 2
		const newY = map.height * map.tileheight / 2 - y
		const geometry = new THREE.PlaneGeometry(width, height)
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

		const plane = new THREE.Mesh(geometry, material)


		scene.add(plane)
		plane.renderOrder = -1
		plane.position.x = newX
		plane.position.y = newY
		plane.position.z = 1
		const teleport = teleportBody.createFixture(planck.Box(width / 2, height / 2, planck.Vec2(newX, newY), 0), 0)

		teleport.setUserData(properties)

	})
	let loaded = true
	const unLoad = () => {
		debugger
		scene.remove(scene.getObjectById(meshBottom.id))
		scene.remove(scene.getObjectById(meshTop.id))
		loaded = false
	}
	return { meshTop: meshTop, meshBottom: meshBottom, collisions, teleports, unLoad, loaded }
}
export default getMap