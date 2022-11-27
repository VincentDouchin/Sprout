
import { Box, Vec2 } from "planck";
import { Entity, System } from "../ECS";
import Body from "../Components/Body";
import Pickable from "../Components/Pickable";
import Position from "../Components/Position";
import EntityCollection from "../Components/EntityCollection";
import UIElement from "../Components/UIElement"
import Sprite from "../Components/Sprite";

const ItemPickUp = new System(
	Pickable,
	(entity: Entity, pickable: Pickable) => {
		const [body, position] = entity.getComponents(Body, Position)
		if (position && !body) {
			entity.addComponent(
				new Body({
					allowSleep: false,
					type: 'static'

				}, [{
					shape: Box(8, 8, Vec2(0, 0), 0),
					density: 0,
					isSensor: true,
				}])
			)
		}
		if (body) {
			body.getContactList().forEach((contactEntity: Entity) => {
				contactEntity.getComponent(EntityCollection)?.entities.forEach((entityInCollection: Entity) => {
					if (entityInCollection.getComponent(UIElement)?.type == 'inventory') {
						entity.removeComponent(Position)
						entity.removeComponent(Body)
						entity.getComponent(Sprite).rendered = false
						entityInCollection.getComponent(EntityCollection).entities.push(entity)
					}

				})
			})

		}
	}
)
export default ItemPickUp