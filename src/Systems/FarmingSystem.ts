import FarmableComponent from "../Components/FarmableComponent";
import PositionComponent from "../Components/PositionComponent";
import BodyComponent from "../Components/BodyComponent";
import AnimationComponent from "../Components/AnimationComponent";
import { Entity, System } from "../ECS";
import ItemEntity from "../Entities/ItemEntity";
import { inputs } from "../Initialize";
import SpriteComponent from "../Components/SpriteComponent";
import ShadowComponent from "../Components/ShadowComponent";
import Coroutines from "../Coroutines";

import { easeInOutCubic } from 'tween-functions'
const FarmingSystem = new System(
	FarmableComponent,
	(entity: Entity, farmableComponent: FarmableComponent) => {
		const [body, animation, position] = entity.getComponents(BodyComponent, AnimationComponent, PositionComponent)
		const contactList = body.getContactList('playerSensor')

		if (contactList.length && inputs.interact.once) {
			contactList[0].getComponent(AnimationComponent).playAnimation('watering', 8).then(() => {
				farmableComponent.growth += 1
			})
		}
		animation.selectedSprite = farmableComponent.growth % (animation.animationsLength[farmableComponent.plant] + 1)
		if (animation.selectedSprite == animation.animationsLength[farmableComponent.plant]) {
			const item = ItemEntity('vegetable', 'carrot')
			item.getComponent(SpriteComponent).scale = 0.5
			item.addComponent(new PositionComponent(position.x, position.y))
			item.addComponent(new ShadowComponent(8, 4, 8))
			Coroutines.add(function* () {
				const [position, sprite] = item.getComponents(PositionComponent, SpriteComponent)

				let direction = 1
				while (position) {
					const tween = function* (value: number, target: number, duration: number) {
						let counter = 0
						const initialValue = value
						while (counter < duration) {
							counter++
							yield easeInOutCubic(counter, initialValue, target, duration)

						}
						return value

					}
					const tweenSetter = function* (value: number, target: number, duration: number) {
						for (let val of tween(value, target, duration)) {
							sprite.offsetY = val
							yield
						}
					}
					yield* tweenSetter(sprite.offsetY, 1.5 * direction, 40)

					direction *= -1
				}
			})
			farmableComponent.plant = ''
		}
		animation.state = farmableComponent.plant
	}
)
export default FarmingSystem