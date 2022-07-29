import getPlane from "./plane";
import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import * as planck from 'planck'
import { world } from '../../src/Initialize'
import { Box3, BoxHelper, Vector3, Mesh, PlaneGeometry, MeshBasicMaterial } from "three";
const friction = 0.50

const Character = async (_name) => {
	const name = _name
	const img = await AssetManager.load(`${name ? name + ' - ' : ''}Premium Charakter Spritesheet`)
	const normal = await AssetManager.load('Basic Charakter Spritesheet-normal')
	const tileSize = 48
	const tilesNb = { vertical: img.height / tileSize, horizontal: img.width / tileSize }
	const buffer = Buffer(img.width, img.height)
	const bufferNormal = Buffer(normal.width, normal.height)
	buffer.drawImage(img, 0, 0)
	bufferNormal.drawImage(normal, 0, 0)
	const mesh = getPlane({ buffer }, tileSize, tileSize, bufferNormal)
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
		position: { x: 1000, y: -200 }
	})
	body.createFixture(planck.Box(8, 8, planck.Vec2(0, 0), 0.0), 0.0)
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

	const update = () => {
		animationCounter++
		if (animationCounter > 4) {
			animationCounter = 0
			selectedSprite = (selectedSprite + 1) % spritesNb
		}
		const moving = Math.abs(velocity.x) > moveForce || Math.abs(velocity.y) > moveForce ? 'moving' : 'idle'
		// const offsetY = 1 - ((animations.findIndex(animation => animation == direction) + 1 + moving) / animations.length)
		const offsetY = 1 - ((animations[moving][direction] + 1) / tilesNb.vertical)
		const offsetX = selectedSprite / tilesNb.horizontal
		mesh.material.map.offset.set(offsetX, offsetY)
		velocity.x *= friction
		velocity.y *= friction

		body.setLinearVelocity(velocity)
		const bodyPosition = body.getPosition()
		mesh.position.x = bodyPosition.x
		mesh.position.y = bodyPosition.y


	}
	return { mesh, move, update, velocity, body }
}
export default Character