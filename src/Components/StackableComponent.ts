import { Component } from "../ECS";

class StackableComponent extends Component {
	amount: number
	stackSize = 99
	constructor(amount: number = 1) {
		super()
		this.amount = amount
	}
	canAddToStack() {
		return this.amount < this.stackSize
	}
}
export default StackableComponent