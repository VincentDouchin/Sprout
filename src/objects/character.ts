import { Box, Vec2 } from "planck"
import Body from "../Components/Body"
import Sprite from "../Components/Sprite"

const friction = 0.50


interface Character {
	sprite: Sprite
	body: planck.Body,
	direction: string
	velocity: { x: number, y: number }
	moveForce: number
	stopped: boolean
	canTeleport: boolean
}

const Character = {
	create({ name, position = Vec2(0, 0), direction = 'down', velocity = { x: 0, y: 0 }, moveForce = 0.25, stopped = false, canTeleport = true }): Character {

		const sprite = Sprite.create({
			img: `${name} - Premium Charakter Spritesheet`,
			tileSize: 48,
			animations: ['idle-down', 'idle-up', 'idle-left', 'idle-right', 'moving-down', 'moving-up', 'moving-right', 'moving-left']
		})
		sprite.mesh.renderOrder = 1
		const body = Body.create({
			type: 'dynamic',
			fixedRotation: true,
			bullet: true,
			allowSleep: true,
			position: position
		})
		body.createFixture({
			shape: Box(7, 8, Vec2(0, 0), 0.0),
			density: 0.0,
			userData: { type: 'player' }
		})
		return { sprite, body, direction, velocity, moveForce, stopped, canTeleport }
	},
	move(character: Character, _direction: string) {
		character.direction = _direction
		switch (_direction) {
			case 'up': {
				character.velocity.y += character.moveForce
			}; break
			case 'down': {
				character.velocity.y -= character.moveForce
			}; break
			case 'right': {
				character.velocity.x += character.moveForce
			}; break
			case 'left': {
				character.velocity.x -= character.moveForce
			}; break
		}
	},
	update({ sprite, velocity, stopped, moveForce, direction, body }: Character) {
		sprite.state = (Math.abs(velocity.x) > moveForce || Math.abs(velocity.y) > moveForce ? 'moving' : 'idle') + '-' + direction
		Sprite.update(sprite)
		if (!stopped) {
			velocity.x *= friction
			velocity.y *= friction

		} else {
			velocity.x = 0
			velocity.y = 0
		}
		body.setLinearVelocity(new Vec2(velocity.x, velocity.y))
		const bodyPosition = body.getPosition()
		sprite.mesh.position.x = bodyPosition.x
		sprite.mesh.position.y = bodyPosition.y

	},
	getPosition(character) {
		return character.body.getPosition()
	},
	teleport(character, position: planck.Vec2) {
		Body.setPosition(character.body, position)
		Sprite.setPosition(character.sprite, position)

	}
}
export default Character
// const Character = ({ name, position = Vec2(0, 0), player = true }) => {
// 	const sprite = SpriteAnimation({
// 		img: `${name} - Premium Charakter Spritesheet`,
// 		tileSize: 48,
// 		animations: ['idle-down', 'idle-up', 'idle-left', 'idle-right', 'moving-down', 'moving-up', 'moving-right', 'moving-left']
// 	})
// 	sprite.mesh.renderOrder = 1

// 	const moveForce = 0.25

// 	const body = world.createBody({
// 		type: 'dynamic',
// 		fixedRotation: true,
// 		bullet: true,
// 		allowSleep: true,
// 		position: position
// 	})
// 	const playerFixture = body.createFixture({
// 		shape: planck.Box(8, 8, planck.Vec2(0, 0), 0.0),
// 		density: 0.0
// 	})
// 	playerFixture.setUserData({ type: player ? 'player' : 'NPC' })

// 	const velocity = planck.Vec2(0, 0)
// 	let direction = 'down'

// 	//! Items
// 	const items = [{ category: 'seed', type: 'maize' }, { category: 'tool', type: 'hoe' }]
// 	//! Move
// 	const move = (_direction: string) => {
// 		direction = _direction
// 		switch (_direction) {
// 			case 'up': {
// 				velocity.y += moveForce
// 			}; break
// 			case 'down': {
// 				velocity.y -= moveForce
// 			}; break
// 			case 'right': {
// 				velocity.x += moveForce
// 			}; break
// 			case 'left': {
// 				velocity.x -= moveForce
// 			}; break
// 		}
// 	}
// 	let canTeleport = true

// 	// const frontSensor = new Mesh(
// 	// 	new PlaneGeometry(16, 16),
// 	// 	new MeshBasicMaterial({ color: 0xFF0000 })
// 	// )
// 	// frontSensor.position.z = 1

// 	// scene.add(frontSensor)
// 	const frontBody = world.createBody({
// 		type: 'dynamic',
// 		fixedRotation: true,
// 		bullet: true,
// 		allowSleep: true,
// 		position: position
// 	})
// 	const frontFixture = frontBody.createFixture({
// 		shape: Box(8, 8, Vec2(0, 0), 0),
// 		density: 0,
// 		isSensor: true,

// 	})
// 	frontFixture.setUserData({ type: (player ? 'player' : 'NPC') + 'Sensor' })
// 	let stopped = false
// 	const update = () => {
// 		sprite.update()
// 		sprite.setState((Math.abs(velocity.x) > moveForce || Math.abs(velocity.y) > moveForce ? 'moving' : 'idle') + '-' + direction)
// 		if (!stopped) {
// 			velocity.x *= friction
// 			velocity.y *= friction

// 			body.setLinearVelocity(velocity)
// 			const bodyPosition = body.getPosition()
// 			sprite.mesh.position.x = bodyPosition.x
// 			sprite.mesh.position.y = bodyPosition.y
// 			const frontOffset = Vec2({ left: -16, right: 16 }[direction] ?? 0, { up: 16, down: -16 }[direction] ?? 0)

// 			frontBody.setPosition(frontOffset.add(bodyPosition))
// 			// frontSensor.position.x = frontBody.getPosition().x
// 			// frontSensor.position.y = frontBody.getPosition().y
// 		} else {
// 			velocity.x = 0
// 			velocity.y = 0
// 		}


// 	}
// 	const teleport = (position: planck.Vec2) => {
// 		body.setPosition(position)
// 	}

// 	const setStop = (_stopped: boolean) => {
// 		stopped = _stopped
// 	}

// 	return { position: sprite.mesh.position, move, update, canTeleport, teleport, items, setStop }
// }
// export default Character
