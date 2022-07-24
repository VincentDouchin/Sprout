import getPlane from "./plane";
import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import { Box3, BoxHelper, Vector3, Mesh, PlaneGeometry, MeshBasicMaterial } from "three";
const friction = 0.85

const Character = async (name) => {
	const img = await AssetManager.load(`${name ? name + '-' : ''}}Basic Charakter Spritesheet`)
	const normal = await AssetManager.load('Basic Charakter Spritesheet-normal')
	const tileSize = 48
	const buffer = Buffer(img.width, img.height)
	const bufferNormal = Buffer(normal.width, normal.height)
	buffer.drawImage(img, 0, 0)
	bufferNormal.drawImage(normal, 0, 0)
	const mesh = getPlane({ buffer }, tileSize, tileSize, bufferNormal)
	let selectedSprite = 0
	let animationCounter = 0
	const spritesNb = 4
	mesh.material.map.repeat.set(0.25, 0.25)
	mesh.material.map.offset.y = 0.75

	mesh.position.z = 1
	// const collisionBox = new Box3().setFromObject(mesh)
	// mesh.rotation.x = -150
	const moveForce = 0.25
	const directions = ['right', 'left', 'up', 'down',]

	const velocity = { x: 0, y: 0 }
	let direction = 'down'


	const move = (_direction) => {
		direction = _direction
		switch (_direction) {
			case 'up': {
				velocity.y += moveForce
			}; break
			case 'down': {
				velocity.y -= moveForce
			}; break
			case 'right': {
				velocity.x += moveForce
			}; break
			case 'left': {
				velocity.x -= moveForce

			}; break
		}

	}
	const collisionBox = new Mesh(new PlaneGeometry(16, 16), new MeshBasicMaterial())
	const boxhelper = new BoxHelper(collisionBox, 0xffff00);
	scene.add(boxhelper);

	const update = (time) => {
		boxhelper.update()
		animationCounter++
		if (animationCounter > 20) {
			animationCounter = 0
			selectedSprite = (selectedSprite + 1) % spritesNb
		}
		const moving = Math.abs(velocity.x) > 1 || Math.abs(velocity.y) > 1
		const offsetY = directions.findIndex(dir => dir == direction) / directions.length
		const offsetX = moving ? selectedSprite / 4 : 0
		mesh.material.map.offset.set(offsetX, offsetY)
		velocity.x *= friction
		velocity.y *= friction
		mesh.position.set(mesh.position.x += velocity.x, mesh.position.y += velocity.y)
		collisionBox.position.set(...mesh.position.toArray())
	}
	return { mesh, move, update, velocity }
}
export default Character