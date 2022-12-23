import DataComponent from "../../Components/DataComponent";
import EntityCollectionComponent from "../../Components/EntityCollectionComponent";
import { Entity } from "../../ECS";
import UIElementComponent from "../../Components/UIElementComponent";

const UIItem = (item: Entity) => new Entity(
	new DataComponent({ itemId: item.id }),
	new UIElementComponent('item'),
	new EntityCollectionComponent()

)
export default UIItem