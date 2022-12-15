import { Component, Entity } from "../ECS";

class ItemComponent extends Component {
	category: string
	type: string
	constructor(category: string, type: string) {
		super()
		this.category = category
		this.type = type
	}
	compare(item: Entity) {
		const otherItem = item.getComponent(ItemComponent)
		return otherItem.type === this.type && otherItem.category === this.category
	}
}
export default ItemComponent