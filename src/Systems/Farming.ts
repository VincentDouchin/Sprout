import FarmableComponent from "../Components/Farmable";
import Position from "../Components/Position";
import Body from "../Components/Body";
import Animation from "../Components/Animation";
import Interactable from "../Components/Interactable";
import SelectorComponent from "../Components/SelectorComponent";
import { Entity, System } from "../ECS";
import Item from "../Entities/Item";
import { inputs } from "../Initialize";

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
			item.addComponent(new Position(position.x, position.y))
			console.log(position)
			farmableComponent.plant = ''
		}
		animation.state = farmableComponent.plant
	}
)
export default Farming