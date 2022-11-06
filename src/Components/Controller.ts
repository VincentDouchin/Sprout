import { Component } from "../ECS"

class Controller extends Component {
	player = false
	constructor(player = false, options: any = {}) {
		super()
		this.player = player
		Object.assign(this, options)
	}

}
export default Controller