import { Component } from "../ECS";

class UIElement extends Component {
	type: string
	constructor(type: string) {
		super()
		this.type = type
	}
}
export default UIElement