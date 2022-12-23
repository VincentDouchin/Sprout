
import DataComponent from "../Components/DataComponent";
import EntityCollectionComponent from "../Components/EntityCollectionComponent";
import InventoryComponent from "../Components/InventoryComponent";
import SpriteComponent from "../Components/SpriteComponent";
import StackableComponent from "../Components/StackableComponent";
import { ECS, Entity, System } from "../ECS";
import { UICamera, UIScene } from "../Initialize";
import UIElementComponent from "../Components/UIElementComponent";
import UIText from "../Components/UIText";
import UITransform from "../Components/UITransform";
import UIItem from "./UIEntities/UIItem";


const UISystem = new System(
	UIElementComponent,
	(entity: Entity, UIElement: UIElementComponent) => {

		const [sprite, entityCollection, text] = entity.getComponents(SpriteComponent, EntityCollectionComponent, UIText)
		if (entityCollection) {
			entityCollection.entities.forEach((childEntity: Entity) => {
				if (!childEntity) return
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


		switch (UIElement.type) {
			case 'inventory': {
				const [data] = entity.getComponents(DataComponent)
				const player = ECS.getEntityById(data?.inventoryId)
				if (player) {
					const inventory = player.getComponent(InventoryComponent)
					inventory.items.forEach((item: Entity, itemIndex: number) => {
						if (!entityCollection.entities[itemIndex]) {
							const itemTransform = new UITransform((itemIndex + 1.5) / 11, 0.5)
							const uiItem = UIItem(item)
							uiItem.addComponent(itemTransform)
							entityCollection.addEntities(uiItem)
						}
					})
				}
			}; break
			case 'item': {
				const [data, childSprite] = entity.getComponents(DataComponent, SpriteComponent, EntityCollectionComponent)
				const item = ECS.getEntityById(data.itemId)
				if (!childSprite) {
					const itemSprite = item.getComponent(SpriteComponent)
					itemSprite.scale = 0.8
					entity.addComponent(itemSprite)
				}
				const [stackable] = item.getComponents(StackableComponent)
				if (stackable && !text) {
					entity.addComponent(new UIText(String(stackable.amount)))
				}
				if (text && stackable) {
					text.setText(String(stackable.amount))
				}
			}; break
		}

	}
)
export default UISystem