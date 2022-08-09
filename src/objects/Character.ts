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
	frontBody: planck.Body
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
			position: position
		})
		body.createFixture({
			shape: Box(7, 8, Vec2(0, 0), 0),
			density: 0,
			userData: { type: 'player' }
		})
		const frontBody = Body.create({
			type: 'dynamic',
			fixedRotation: true,
			allowSleep: false,
			position: position,
		})
		const frontFixture = frontBody.createFixture({
			shape: Box(8, 8, Vec2(0, 0), 0),
			density: 0,
			isSensor: true,
			userData: { type: 'playerSensor' }
		})
		// const frontMesh = new Mesh(
		// 	new PlaneGeometry(14, 14),
		// 	new MeshBasicMaterial({ color: 0x00FFFF })
		// )
		// scene.add(frontMesh)
		// frontMesh.position.z = 2
		return { sprite, body, direction, velocity, moveForce, stopped, canTeleport, frontBody, }
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
	update({ sprite, velocity, stopped, moveForce, direction, body, frontBody }: Character) {
		sprite.state = (Math.abs(velocity.x) > moveForce || Math.abs(velocity.y) > moveForce ? 'moving' : 'idle') + '-' + direction
		Sprite.update(sprite)
		if (stopped) {
			velocity.x = 0
			velocity.y = 0
		} else {
			velocity.x *= friction
			velocity.y *= friction

		}
		body.setLinearVelocity(new Vec2(velocity.x, velocity.y))

		const bodyPosition = body.getPosition()
		sprite.mesh.position.x = bodyPosition.x
		sprite.mesh.position.y = bodyPosition.y
		const frontOffset = Vec2({ left: -16, right: 16 }[direction] ?? 0, { up: 16, down: -16 }[direction] ?? 0)

		frontBody.setPosition(frontOffset.add(bodyPosition))
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
