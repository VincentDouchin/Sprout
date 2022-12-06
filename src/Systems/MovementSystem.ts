import { Entity, System } from "../ECS";
import AnimationComponent from "../Components/AnimationComponent";
import ControllerComponent from "../Components/ControllerComponent";
import BodyComponent from "../Components/BodyComponent";
import CameraTargetComponent from "../Components/CameraTargetComponent";
import PositionComponent from "../Components/PositionComponent";
import { camera, inputs } from "../Initialize";
import { Vec2 } from "planck"
import { FRICTION } from "../Constants";
import { Vector3 } from "three";
const MovementSystem = new System(
	PositionComponent,
	(entity: Entity, position) => {
		const [animation, controller, body, cameraTarget] = entity.getComponents(AnimationComponent, ControllerComponent, BodyComponent, CameraTargetComponent)

		if (body) {
			body.idle = Math.abs(body.velocity.x) + Math.abs(body.velocity.y) < body.moveForce
		}
		if (controller && body) {

			if (controller.stopped) {
				body.velocity.x = 0
				body.velocity.y = 0

			} else {
				body.velocity.x *= FRICTION
				body.velocity.y *= FRICTION
			}
		}
		if (body && !body.stopped) {
			if (position.initialPosition || body.sensor) {
				body.body.setPosition(new Vec2(position.x, position.y))
				position.initialPosition = false
			}

			body.body.setLinearVelocity(new Vec2(body.velocity.x, body.velocity.y))
			const { x, y } = body.body.getPosition()
			position.x = x
			position.y = y
		}
		if (controller && controller.player && body) {
			if (inputs.left.active) {
				animation.selectedDirection = 'left'
				body.velocity.x -= body.moveForce
			}
			if (inputs.right.active) {
				animation.selectedDirection = 'right'
				body.velocity.x += body.moveForce
			}
			if (inputs.up.active) {
				animation.selectedDirection = 'up'
				body.velocity.y += body.moveForce
			}
			if (inputs.down.active) {
				animation.selectedDirection = 'down'
				body.velocity.y -= body.moveForce
			}
		}


		if (cameraTarget) {
			camera.position.x = position.x
			camera.position.y = position.y
			camera.lookAt(new Vector3(position.x, position.y, 0))
		}

	}
)
export default MovementSystem