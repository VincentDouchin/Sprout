import { Component } from "../ECS"

class TeleportableComponent extends Component {
	canTeleport: boolean
	lastTeleport: string | null = null
	constructor(canTeleport = true) {
		super(arguments)
		this.canTeleport = canTeleport
	}
	destroy() { }
}
export default TeleportableComponent