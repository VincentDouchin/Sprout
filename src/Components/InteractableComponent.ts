import { Component } from "../ECS"

class InteractableComponent extends Component {
	isInteractable = true
	type: string
	constructor(type: string) {
		super(arguments)
		this.type = type
	}
	destroy() {

	}
}
export default InteractableComponent