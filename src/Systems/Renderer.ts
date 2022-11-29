import Sprite from "../Components/Sprite";
import Animation from "../Components/Animation";
import Position from "../Components/Position";
import Body from "../Components/Body";
import { Entity, System } from "../ECS";
import { scene } from "../Initialize";
import Shadow from "../Components/Shadow";
const checkList = new Set()
const Renderer = new System(
	Sprite,
	(entity: Entity, sprite: Sprite) => {
		const [animation, position, body, shadow] = entity.getComponents(Animation, Position, Body, Shadow)

		if (!sprite.rendered && position) {
			scene.add(sprite.mesh)
			sprite.rendered = true
			// sprite.destroy = () => 
		}
		if (shadow && position) {
			if (!shadow.rendered) {
				scene.add(shadow.mesh)
				shadow.rendered = true

				// shadow.destroy = () => scene.remove(scene.getObjectById(shadow.mesh.id))
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




	}, {

	// postUpdate(entities: Entity[]) {
	// 	const entitiesMeshIds = entities
	// 		.filter((entity: Entity) => entity.getComponent(Position))
	// 		.map((entity: Entity) => entity.getComponent(Sprite).mesh.id)

	// 	checkList.forEach((id: number) => {
	// 		if (!entitiesMeshIds.includes(id)) {
	// 			scene.remove(scene.getObjectById(id))
	// 			checkList.delete(id)
	// 		}
	// 	})
	// }

}

)
export default Renderer