import Body from "../Components/Body";
import FarmableComponent from "../Components/Farmable";
import { Entity, System } from "../ECS";
import { inputs } from "../Initialize";

const Farming = new System(
	'FarmableComponent',
	(entity: Entity, farmableComponent: FarmableComponent) => {
		const [body, sprite] = entity.getComponents('Body', 'Sprite')
		const contactList = body.getContactList()
		if (contactList.some((contactEntity: Entity) => contactEntity.getComponent('Interactable').type == 'player') && inputs.interact.once) {
			farmableComponent.growth += 1
			console.log(farmableComponent)
		}
		sprite.selectedSprite = farmableComponent.growth % (sprite.animationsLength[farmableComponent.plant] + 1)
		if (sprite.selectedSprite == sprite.animationsLength[farmableComponent.plant]) {
			farmableComponent.plant = ''
		}
		sprite.state = farmableComponent.plant
	}
)
export default Farming