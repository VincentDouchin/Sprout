import { Box, Vec2 } from "planck"
import Body from "../Components/Body"
import Entity from "../Components/Entity"
import Sprite from "../Components/Sprite"

const friction = 0.50


interface Character extends Entity {
	data: {
		direction: string
		velocity: { x: number, y: number }
		moveForce: number
		stopped: boolean
		canTeleport: boolean
	}
	type: string
}

const Character = {
	create({ name, position = Vec2(0, 0), direction = 'down', velocity = { x: 0, y: 0 }, moveForce = 0.25, stopped = false, canTeleport = true }): Entity {
		const character = Entity.create({
			sprite: {
				img: `${name} - Premium Charakter Spritesheet`,
				tileSize: 48,
				animations: ['idle-down', 'idle-up', 'idle-left', 'idle-right', 'moving-down', 'moving-up', 'moving-right', 'moving-left']
			},
			body: {
				type: 'dynamic',
				fixedRotation: true,
				bullet: true,
				position: position
			},
			fixture: {
				shape: Box(7, 8, Vec2(0, 0), 0),
				density: 0,
				userData: { type: 'player' }
			},
			position,
			data: {

				direction,
				velocity,
				moveForce,
				stopped,
				canTeleport
			},
			type: 'character',
		})

		// const frontBody = Body.create({
		// 	type: 'dynamic',
		// 	fixedRotation: true,
		// 	allowSleep: false,
		// 	position: position,
		// })
		// const frontFixture = frontBody.createFixture({
		// 	shape: Box(0, 0, Vec2(0, 0), 0),
		// 	density: 0,
		// 	isSensor: true,
		// 	userData: { type: 'playerSensor' }
		// })
		// const frontMesh = new Mesh(
		// 	new PlaneGeometry(14, 14),
		// 	new MeshBasicMaterial({ color: 0x00FFFF })
		// )
		// scene.add(frontMesh)
		// frontMesh.position.z = 2
		// return { sprite, body, direction, velocity, moveForce, stopped, canTeleport, frontBody, }
		return character
	},
	move(character: Character, _direction: string) {
		character.data.direction = _direction
		switch (_direction) {
			case 'up': {
				character.data.velocity.y += character.data.moveForce
			}; break
			case 'down': {
				character.data.velocity.y -= character.data.moveForce
			}; break
			case 'right': {
				character.data.velocity.x += character.data.moveForce
			}; break
			case 'left': {
				character.data.velocity.x -= character.data.moveForce
			}; break
		}
	},
	update(character: Character) {
		character.sprite.state = (Math.abs(character.data.velocity.x) > character.data.moveForce || Math.abs(character.data.velocity.y) > character.data.moveForce ? 'moving' : 'idle') + '-' + character.data.direction
		// Sprite.update(character.sprite)
		if (character.data.stopped) {
			character.data.velocity.x = 0
			character.data.velocity.y = 0
			character.body.setLinearVelocity(new Vec2(0, 0))
		} else {
			character.data.velocity.x *= friction
			character.data.velocity.y *= friction

			character.body.setLinearVelocity(new Vec2(character.data.velocity.x, character.data.velocity.y))
		}

		const bodyPosition = character.body.getPosition()
		character.sprite.mesh.position.x = bodyPosition.x
		character.sprite.mesh.position.y = bodyPosition.y
		// const frontOffset = Vec2({ left: -16, right: 16 }[character.data.direction] ?? 0, { up: 16, down: -16 }[character.data.direction] ?? 0)

		// frontBody.setPosition(frontOffset.add(bodyPosition))
		// frontMesh.position.x = frontBody.getPosition().x - frontBody.getPosition().x % 16
		// frontMesh.position.y = frontBody.getPosition().y - frontBody.getPosition().y % 16

	},
	getPosition(character: Character) {
		return character.body.getPosition()
	},
	teleport(character: Character, position: planck.Vec2) {
		Body.setPosition(character.body, position)
		Sprite.setPosition(character.sprite, position)

	}
}
export default Character
