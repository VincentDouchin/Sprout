import { Component } from "../ECS";

class UIElementComponent extends Component {
	type: string
	constructor(type: string) {
		super(arguments)
		this.type = type


	}
}
export default UIElementComponent