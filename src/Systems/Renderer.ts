import Sprite from "../Components/Sprite";
import Animation from "../Components/Animation";
import Position from "../Components/Position";
import Body from "../Components/Body";
import { Entity, System } from "../ECS";
import { scene } from "../Initialize";
const checkList = new Set()
const Renderer = new System(
	Sprite,
	(entity: Entity, sprite: Sprite) => {
		const [animation, position, body] = entity.getComponents(Animation, Position, Body)

		if (!sprite.rendered && position) {
			scene.add(sprite.mesh)
			sprite.rendered = true
			checkList.add(sprite.mesh.id)
		}

		sprite.mesh.renderOrder = sprite.renderOrder

		if (position) {
			sprite.mesh.position.x = position.x
			sprite.mesh.position.y = position.y
			sprite.mesh.position.z = 0
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




	}, {

	postUpdate(entities: Entity[]) {
		const entitiesMeshIds = entities
			.filter((entity: Entity) => entity.getComponent(Position))
			.map((entity: Entity) => entity.getComponent(Sprite).mesh.id)
		checkList.forEach((id: number) => {
			if (!entitiesMeshIds.includes(id)) {
				scene.remove(scene.getObjectById(id))
				checkList.delete(id)
			}
		})
	}

}

)
export default Renderer