import { Component } from "../ECS"

class CameraTargetComponent extends Component {
	isTarget = true
	constructor() {
		super(arguments)
	}
}
export default CameraTargetComponent