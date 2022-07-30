import getPlane from "../utils/plane";
import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import * as planck from 'planck'
import { world } from '../Initialize'
const friction = 0.50

for (const name of ['', 'Amélie', 'Clémentine', 'Hughie', 'Jack']) {
	await AssetManager.load(`${name ? name + ' - ' : ''}Premium Charakter Spritesheet`)
}


const Character = (_name: string) => {
	const name = _name
	const img = AssetManager.images[`${name} - Premium Charakter Spritesheet`]
	const tileSize = 48
	const tilesNb = { vertical: img.height / tileSize, horizontal: img.width / tileSize }
	const buffer = Buffer(img.width, img.height)
	// const bufferNormal = Buffer(normal.width, normal.height)
	buffer.drawImage(img, 0, 0)
	const mesh = getPlane({ buffer }, tileSize, tileSize,)
	let selectedSprite = 0
	let animationCounter = 0
	const spritesNb = 8
	mesh.material.map.repeat.set(1 / tilesNb.horizontal, 1 / tilesNb.vertical)
	mesh.material.map.offset.set(1 / tilesNb.horizontal, 1 / tilesNb.vertical)

	mesh.renderOrder = 1

	const moveForce = 0.25
	const animations = {
		idle: { down: 0, up: 1, left: 2, right: 3 },
		moving: { down: 4, up: 5, right: 6, left: 7 },

	}
	const body = world.createBody({
		type: 'dynamic',
		fixedRotation: true,
		bullet: true,
		allowSleep: true,
		// position: planck.Vec2(1000, - 200)
		position: planck.Vec2(0, 0)
	})
	body.createFixture(planck.Box(8, 8, planck.Vec2(0, 0), 0.0), 0.0)
	const velocity = planck.Vec2(0, 0)
	let direction = 'down'

	//! Items
	const items = [{ category: 'seed', type: 'maize' }, { category: 'tool', type: 'axe' }]
	//! Move
	const move = (_direction: string) => {
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
	let canTeleport = true
	const update = () => {
		animationCounter++
		if (animationCounter > 4) {
			animationCounter = 0
			selectedSprite = (selectedSprite + 1) % spritesNb
		}
		const state = Math.abs(velocity.x) > moveForce || Math.abs(velocity.y) > moveForce ? 'moving' : 'idle'

		const offsetY = 1 - ((animations[state][direction] + 1) / tilesNb.vertical)
		const offsetX = selectedSprite / tilesNb.horizontal
		mesh.material.map.offset.set(offsetX, offsetY)
		velocity.x *= friction
		velocity.y *= friction

		body.setLinearVelocity(velocity)
		const bodyPosition = body.getPosition()
		mesh.position.x = bodyPosition.x
		mesh.position.y = bodyPosition.y


	}
	const teleport = (position: planck.Vec2) => {
		body.setPosition(position)
	}

	return { mesh, move, update, velocity, body, canTeleport, teleport, items }
}
export default Character