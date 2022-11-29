import { UICamera, UIScene } from "../Initialize";
import { Entity, System } from "../ECS";
import UIElement from "../Components/UIElement";
import Sprite from "../Components/Sprite";
import EntityCollection from "../Components/EntityCollection";
const UIRenderer = new System(
	UIElement,
	(entity: Entity, uiElement: UIElement) => {
		if (uiElement.type == 'inventory') {
			const [inventorySprite, items] = entity.getComponents(Sprite, EntityCollection)
			if (!inventorySprite.rendered) {
				inventorySprite.mesh.position.y = UICamera.bottom + inventorySprite.height / 2
				inventorySprite.mesh.renderOrder = 0

				UIScene.add(inventorySprite.mesh)

			}
			items.entities.forEach((item: Entity, itemIndex: number) => {
				const sprite = item.getComponent(Sprite)
				if (!sprite.rendered) {

					sprite.mesh.position.y = inventorySprite.mesh.position.y
					UIScene.add(sprite.mesh)
					sprite.mesh.renderOrder = inventorySprite.mesh.renderOrder + 1
					sprite.scale = 1

					sprite.rendered = true
				}
				sprite.mesh.position.x = inventorySprite.mesh.position.x - (9 / 2) * 16 + 8 + itemIndex * 16
			})
		}
	}
)
export default UIRenderer