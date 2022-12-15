
import DataComponent from "../Components/DataComponent";
import EntityCollectionComponent from "../Components/EntityCollectionComponent";
import InventoryComponent from "../Components/InventoryComponent";
import SpriteComponent from "../Components/SpriteComponent";
import StackableComponent from "../Components/StackableComponent";
import { ECS, Entity, System } from "../ECS";
import { UICamera, UIScene } from "../Initialize";
import UIElementComponent from "./UIComponents/UIElementComponent";
import UIText from "./UIEntities/UIText";
import UITransform from "./UIComponents/UITransform";
import UIItem from "./UIEntities/UIItem";


const UISystem = new System(
	UIElementComponent,
	(entity: Entity, UIElement: UIElementComponent) => {

		const [sprite, transform, entityCollection] = entity.getComponents(SpriteComponent, UITransform, EntityCollectionComponent)
		if (entityCollection) {
			entityCollection.entities.forEach((childEntity: Entity) => {
				const [childSprite, childTransform] = childEntity.getComponents(SpriteComponent, UITransform)
				if (childSprite && !childSprite?.rendered) {
					(sprite?.mesh ?? UIScene).add(childSprite.mesh)
					childSprite.renderOrder = (sprite?.renderOrder ?? 0) + 1
					childSprite.rendered = true
				}
				if (childTransform && childSprite) {
					const width = sprite?.width ?? UICamera.right * 2
					const height = sprite?.height ?? UICamera.bottom * 2
					childTransform.x = width * childTransform.parentx - width / 2 + (childSprite.width * childTransform.selfx - childSprite.width / 2)
					childTransform.y = height * childTransform.parenty - height / 2 + (childSprite.height * childTransform.selfy - childSprite.height / 2)

					childSprite.mesh.position.set(childTransform.x, childTransform.y, 0)
				}
			})
		}
		// if (!sprite?.rendered) {
		// 	UIScene.add(sprite.mesh)
		// }
		if (transform && sprite) {


			// sprite.mesh.position.set(transform.x * (UICamera.right + sprite.width / 2), transform.y * (UICamera.bottom + sprite.height / 2), 0)
		}
		switch (UIElement.type) {
			case 'inventory': {
				const [data] = entity.getComponents(DataComponent)
				const inventory = ECS.getEntityById(data.inventoryId).getComponent(InventoryComponent)
				inventory.items.forEach((item: Entity, itemIndex: number) => {
					if (!entityCollection.entities[itemIndex]) {
						const itemTransform = new UITransform((itemIndex + 1.5) / 11, 0.5)
						const uiItem = UIItem(item)
						uiItem.addComponent(itemTransform)
						entityCollection.addEntities(uiItem)
					}
				})
			}; break
			case 'item': {
				const [data, childSprite, childEntityCollection] = entity.getComponents(DataComponent, SpriteComponent, EntityCollectionComponent)
				const item = ECS.getEntityById(data.itemId)
				if (!childSprite) {
					entity.addComponent(item.getComponent(SpriteComponent))
				}
				const [stackable] = item.getComponents(StackableComponent,)
				if (stackable && !childEntityCollection) {
					const amount = UIText(stackable.amount)
					amount.addComponent(new UITransform(0.75, 0.25, 0.5, 0.5))
					entity.addComponent(new EntityCollectionComponent(amount))

				}
			}; break
		}

	}
)
export default UISystem