import EntityCollectionComponent from "../../Components/EntityCollectionComponent";
import { Entity } from "../../ECS";
import UIElementComponent from "../../Components/UIElementComponent";
import UIInventory from "../UIEntities/UIInventory";

const UIMain = () => new Entity(
	new UIElementComponent('screen'),
	new EntityCollectionComponent(
		UIInventory()
	)
)
export default UIMain