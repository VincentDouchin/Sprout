import { Component } from "../ECS"

class Teleportable extends Component {
	canTeleport: boolean
	lastTeleport: string | null = null
	constructor(canTeleport = true) {
		super()
		this.canTeleport = canTeleport
	}
	destroy() { }
}
export default Teleportable