import { MeshBasicMaterial } from "three";
import DataComponent from "../../Components/DataComponent";
import EntityCollectionComponent from "../../Components/EntityCollectionComponent";
import SpriteComponent from "../../Components/SpriteComponent";
import { Entity } from "../../ECS";
import Frame from "../../utils/Frame";
import UIElementComponent from "../UIComponents/UIElementComponent";
import UITransform from "../UIComponents/UITransform";
import UIManager from "../UIManager";

const InventoryUI = () => {
	const entity = new Entity(
		new SpriteComponent(Frame(9, 1), { material: MeshBasicMaterial, renderOrder: 1 }),
		new UIElementComponent('inventory'),
		new UITransform(0.5, 1, 0.5, 5 / 6),
		new EntityCollectionComponent()
	)
	UIManager.subscribe('bindInventory', (inventoryId: string) => {
		entity.addComponent(new DataComponent({ inventoryId }))
		console.log(entity.getComponent(DataComponent))
	})
	return entity
}

export default InventoryUI