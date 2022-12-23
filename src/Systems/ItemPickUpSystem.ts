
import { Box, Vec2 } from "planck";
import { Entity, System } from "../ECS";
import BodyComponent from "../Components/BodyComponent";
import PickableComponent from "../Components/PickableComponent";
import PositionComponent from "../Components/PositionComponent";
import EntityCollectionComponent from "../Components/EntityCollectionComponent";
import UIElementComponent from "../Components/UIElementComponent"
import Sprite from "../Components/SpriteComponent";
import ShadowComponent from "../Components/ShadowComponent";
import InventoryComponent from "../Components/InventoryComponent";
import SpriteComponent from "../Components/SpriteComponent";

const ItemPickUp = new System(
	PickableComponent,
	(entity: Entity, pickable: PickableComponent) => {
		const [body, position] = entity.getComponents(BodyComponent, PositionComponent)
		if (body) {
			body.getContactList('player').forEach((contactEntity: Entity) => {
				const inventory = contactEntity.getComponent(InventoryComponent)
				if (inventory) {
					console.log(entity.id)
					entity.removeComponent(PositionComponent)
					entity.removeComponent(BodyComponent)
					entity.removeComponent(ShadowComponent)
					entity.removeComponent(PickableComponent)
					entity.getComponent(SpriteComponent).remove()
					inventory.add(entity)
				}
			})

		}
		if (position && !body) {
			const body = new BodyComponent({
				allowSleep: false,
				type: 'static'

			}, [{
				shape: Box(8, 8, Vec2(0, 0), 0),
				density: 0,
				isSensor: true,
			}])
			body.sensor = true
			entity.addComponent(body)
		}

	}
)
export default ItemPickUp