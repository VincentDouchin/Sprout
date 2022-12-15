import DataComponent from "../../Components/DataComponent";
import { Entity } from "../../ECS";
import UIElementComponent from "../UIComponents/UIElementComponent";

const UIItem = (item: Entity) => new Entity(
	new DataComponent({ itemId: item.id }),
	new UIElementComponent('item')

)
export default UIItem