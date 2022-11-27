import { Component } from "../ECS"

class Interactable extends Component {
	isInteractable = true
	type: string
	constructor(type: string) {
		super()
		this.type = type
	}
	destroy() {

	}
}
export default Interactable