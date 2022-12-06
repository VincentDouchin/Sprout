import { Component } from "../ECS"

class PositionComponent extends Component {
	x: number
	y: number
	initialPosition = true
	constructor(x: number, y: number) {
		super()
		this.x = x
		this.y = y
	}
	setPosition(x: number, y: number) {
		this.initialPosition = true
		this.x = x
		this.y = y
	}
	destroy() {

	}
}
export default PositionComponent