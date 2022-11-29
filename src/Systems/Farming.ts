import FarmableComponent from "../Components/Farmable";
import Position from "../Components/Position";
import Body from "../Components/Body";
import Animation from "../Components/Animation";
import Interactable from "../Components/Interactable";
import SelectorComponent from "../Components/SelectorComponent";
import { Entity, System } from "../ECS";
import Item from "../Entities/Item";
import { clock, inputs } from "../Initialize";
import Sprite from "../Components/Sprite";
import Shadow from "../Components/Shadow";
import Coroutines from "../Coroutines";
import { waitFor } from "../utils/Functions";
import tweenGenerator from "../utils/tween";
import { easeInOutCubic } from 'tween-functions'
const Farming = new System(
	FarmableComponent,
	(entity: Entity, farmableComponent: FarmableComponent) => {
		const [body, animation, position] = entity.getComponents(Body, Animation, Position)
		const contactList = body.getContactList()
		const selector = contactList.find((contactEntity: Entity) => {
			return contactEntity.getComponent(Interactable)?.type == 'playerSensor'
		})

		if (selector && inputs.interact.once) {
			const parent = selector.getComponent(SelectorComponent).getParent()
			const parentAnimation = parent.getComponent(Animation)

			parentAnimation.playAnimation('watering', 8).then(() => {
				farmableComponent.growth += 1
			})
		}
		animation.selectedSprite = farmableComponent.growth % (animation.animationsLength[farmableComponent.plant] + 1)
		if (animation.selectedSprite == animation.animationsLength[farmableComponent.plant]) {
			const item = Item('vegetable', 'carrot')
			item.getComponent(Sprite).scale = 0.5
			item.addComponent(new Position(position.x, position.y))
			item.addComponent(new Shadow(8, 4, 8))
			Coroutines.add(function* () {
				const [position, sprite] = item.getComponents(Position, Sprite)

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
export default Farming