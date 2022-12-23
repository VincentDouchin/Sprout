import { Component } from '../ECS'

class TeleporterComponent extends Component {
	canTeleport = true
	to: string
	name: string
	constructor(to: string, name: string) {
		super(arguments)
		this.to = to
		this.name = name
	}
	destroy() { }
}
export default TeleporterComponent