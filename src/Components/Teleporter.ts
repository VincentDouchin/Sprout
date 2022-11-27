import { Component } from '../ECS'

class Teleporter extends Component {
	canTeleport = true
	to: string
	name: string
	constructor(to: string, name: string) {
		super()
		this.to = to
		this.name = name
	}
	destroy() { }
}
export default Teleporter