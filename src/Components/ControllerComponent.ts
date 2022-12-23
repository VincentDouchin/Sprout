import { Component } from "../ECS"

class ControllerComponent extends Component {
	player = false
	constructor(player = false, options: any = {}) {
		super(arguments)
		this.player = player
		Object.assign(this, options)
	}

}
export default ControllerComponent