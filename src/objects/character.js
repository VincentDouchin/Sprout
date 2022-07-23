import getPlane from "./plane";
import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
const friction = 0.85

const Character = async () => {
	const img = await AssetManager.load('Basic Charakter Spritesheet')
	const tileSize = 48
	const buffer = Buffer(img.width, img.height)
	const directions = ['right', 'left', 'up', 'down',]
	buffer.drawImage(img, 0, 0)
	const mesh = getPlane(buffer, tileSize, tileSize)
	mesh.material.map.repeat.set(0.25, 0.25)
	mesh.material.map.offset.y = 0.75
	mesh.position.z = 6
	mesh.rotation.x = -150
	const moveForce = 0.25

	const velocity = { x: 0, y: 0 }
	let direction = 'down'
	let lastAnimation = 0
	// let moving = false
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
	window.mesh = mesh
	const update = (time) => {
		if (Math.floor(time * 10 / 4) > lastAnimation) {
			lastAnimation++
		}
		const moving = Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1
		const offsetY = directions.findIndex(dir => dir == direction) / directions.length
		const offsetX = moving ? lastAnimation % 4 / 4 : 0
		mesh.material.map.offset.set(offsetX, offsetY)
		velocity.x *= friction
		velocity.y *= friction
		mesh.position.set(mesh.position.x += velocity.x, mesh.position.y += velocity.y)

	}
	return { mesh, move, update }
}
export default Character