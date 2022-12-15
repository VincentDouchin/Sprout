import SpriteComponent from "../Components/SpriteComponent";
import AnimationComponent from "../Components/AnimationComponent";
import PositionComponent from "../Components/PositionComponent";
import BodyComponent from "../Components/BodyComponent";
import { Entity, System } from "../ECS";
import { scene } from "../Initialize";
import ShadowComponent from "../Components/ShadowComponent";
import DirectionComponent from "../Components/DirectionComponent";

const RendererSystem = new System(
	SpriteComponent,
	(entity: Entity, sprite: SpriteComponent) => {
		const [animation, position, body, shadow, direction] = entity.getComponents(AnimationComponent, PositionComponent, BodyComponent, ShadowComponent, DirectionComponent)

		if (!sprite.rendered && position) {
			scene.add(sprite.mesh)
			sprite.rendered = true
		}
		if (shadow && position) {
			if (!shadow.rendered) {
				scene.add(shadow.mesh)
				shadow.rendered = true
			}
			shadow.mesh.renderOrder = sprite.renderOrder - 1
			shadow.mesh.position.set(position.x, position.y - shadow.offset, 0)
		}
		sprite.mesh.renderOrder = sprite.renderOrder
		sprite.mesh.scale.set(sprite.scale, sprite.scale, 1)
		if (position) {
			sprite.mesh.position.set(position.x + sprite.offsetX, position.y + sprite.offsetY, 0)
		}
		if (animation) {

			if (animation.startAnimation) {
				animation.animationCounter++
			}
			if (animation.animationCounter > animation.speed) {
				animation.animationCounter = 0
				animation.selectedSprite = (animation.selectedSprite + 1) % animation.spriteNb[animation.selectedState]
			}

			sprite.mesh.material['map'].offset.set(animation.offsetX, animation.offsetY)
			sprite.mesh.material['map'].repeat.set(1 / animation.horizontalTilesNb, 1 / animation.verticalTilesNb)


		}
		if (body && animation && animation.direction && ['idle', 'moving'].includes(animation.state)) {

			animation.state = (body.idle ? 'idle' : 'moving')

		}
		if (direction) {
			animation.selectedDirection = direction.direction
		}



	}

)
export default RendererSystem