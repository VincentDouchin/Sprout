import { Component } from "../../ECS";

class UIElementComponent extends Component {
	type: string
	constructor(type: string) {
		super()
		this.type = type


	}
}
export default UIElementComponent