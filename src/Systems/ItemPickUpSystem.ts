
import { Box, Vec2 } from "planck";
import { Entity, System } from "../ECS";
import BodyComponent from "../Components/BodyComponent";
import PickableComponent from "../Components/PickableComponent";
import PositionComponent from "../Components/PositionComponent";
import EntityCollectionComponent from "../Components/EntityCollectionComponent";
import UIElementComponent from "../Components/UIElementComponent"
import Sprite from "../Components/SpriteComponent";
import ShadowComponent from "../Components/ShadowComponent";

const ItemPickUp = new System(
	PickableComponent,
	(entity: Entity, pickable: PickableComponent) => {
		const [body, position] = entity.getComponents(BodyComponent, PositionComponent)
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
			entity.addComponent(
				body
			)
		}
		if (body) {
			body.getContactList().forEach((contactEntity: Entity) => {
				contactEntity.getComponent(EntityCollectionComponent)?.entities.forEach((entityInCollection: Entity) => {
					if (entityInCollection.getComponent(UIElementComponent)?.type == 'inventory') {
						entity.removeComponent(PositionComponent)
						entity.removeComponent(BodyComponent)
						entity.removeComponent(ShadowComponent)
						entity.getComponent(Sprite).rendered = false
						entityInCollection.getComponent(EntityCollectionComponent).addEntities(entity)
					}

				})
			})

		}
	}
)
export default ItemPickUp