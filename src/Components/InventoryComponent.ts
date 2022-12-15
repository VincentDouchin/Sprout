import { Component, ECS, Entity } from "../ECS";
import ItemComponent from "./ItemComponent";
import StackableComponent from "./StackableComponent";
import { observable, computed } from "mobx";
import UIManager from "../UI/UIManager";
class InventoryComponent extends Component {
	#itemsIds: string[] = observable([])
	size: number = 9
	get items() {
		return this.#itemsIds.map((itemId: string) => ECS.getEntityById(itemId))
	}
	render = false
	rendered = false
	constructor(render: boolean) {
		super()
		this.render = render
		if (this.render) {

			this.render = false
		}
	}
	add(...items: Entity[]) {
		items.forEach((item: Entity) => {
			const [stackable, itemComponent] = item.getComponents(StackableComponent, ItemComponent)
			let addToInventory = true
			if (stackable) {
				this.items.forEach((inventoryItem: Entity) => {


					if (itemComponent.compare(inventoryItem) && inventoryItem.getComponent(StackableComponent).canAddToStack()) {
						inventoryItem.getComponent(StackableComponent).amount += 1
						addToInventory = false
					}

				})

			}

			if (addToInventory) {
				this.#itemsIds.push(item.id)
			}





		})
	}
	bind(parentId: string) {
		UIManager.publish('bindInventory', parentId)
	}
	get parent() {
		return ECS.getEntityById(this.parentId)
	}
	remove(item: Entity) {
		this.items.splice(this.items.indexOf(item.id), 1)
	}
}
export default InventoryComponent