import EntityCollectionComponent from "../../Components/EntityCollectionComponent";
import { Entity } from "../../ECS";
import UIElementComponent from "../UIComponents/UIElementComponent";
import InventoryUI from "../UIEntities/InventoryUI";

const UIMain = () => new Entity(
	new UIElementComponent('screen'),
	new EntityCollectionComponent(
		InventoryUI()
	)
)
export default UIMain