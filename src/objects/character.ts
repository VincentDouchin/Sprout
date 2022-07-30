import getPlane from "../utils/Plane";
import AssetManager from "../AssetManager";
import Buffer from "../utils/Buffer";
import * as planck from 'planck'
import { world, scene } from '../Initialize'
import { Box, Vec2 } from "planck";
import { Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
const friction = 0.50

for (const name of ['', 'Amélie', 'Clémentine', 'Hughie', 'Jack']) {
	await AssetManager.load(`${name ? name + ' - ' : ''}Premium Charakter Spritesheet`)
}


const Character = ({ name, position = Vec2(0, 0), player = true }) => {

	const img = AssetManager.images[`${name} - Premium Charakter Spritesheet`]
	const tileSize = 48
	const tilesNb = { vertical: img.height / tileSize, horizontal: img.width / tileSize }
	const buffer = Buffer(img.width, img.height)
	buffer.drawImage(img, 0, 0)
	const mesh = getPlane({ buffer }, tileSize, tileSize,)
	let selectedSprite = 0
	let animationCounter = 0
	const spritesNb = 8
	mesh.material.map.repeat.set(1 / tilesNb.horizontal, 1 / tilesNb.vertical)
	mesh.material.map.offset.set(1 / tilesNb.horizontal, 1 / tilesNb.vertical)

	mesh.renderOrder = 1
	scene.add(mesh)
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
		position: position
	})
	const playerFixture = body.createFixture({
		shape: planck.Box(8, 8, planck.Vec2(0, 0), 0.0),
		density: 0.0
	})
	playerFixture.setUserData({ type: player ? 'player' : 'NPC' })

	const velocity = planck.Vec2(0, 0)
	let direction = 'down'

	//! Items
	const items = [{ category: 'seed', type: 'maize' }, { category: 'tool', type: 'hoe' }]
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

	const frontSensor = new Mesh(
		new PlaneGeometry(16, 16),
		new MeshBasicMaterial({ color: 0xFF0000 })
	)
	frontSensor.position.z = 1

	scene.add(frontSensor)
	const frontBody = world.createBody({
		type: 'dynamic',
		fixedRotation: true,
		bullet: true,
		allowSleep: true,
		position: position
	})
	const frontFixture = frontBody.createFixture({
		shape: Box(8, 8, Vec2(0, 0), 0),
		density: 0,
		isSensor: true,

	})
	frontFixture.setUserData({ type: (player ? 'player' : 'NPC') + 'Sensor' })

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
		const frontOffset = Vec2({ left: -16, right: 16 }[direction] ?? 0, { up: 16, down: -16 }[direction] ?? 0)

		frontBody.setPosition(frontOffset.add(bodyPosition))
		frontSensor.position.x = frontBody.getPosition().x
		frontSensor.position.y = frontBody.getPosition().y
	}
	const teleport = (position: planck.Vec2) => {
		body.setPosition(position)
	}

	return { position: mesh.position, move, update, canTeleport, teleport, items }
}
export default Character