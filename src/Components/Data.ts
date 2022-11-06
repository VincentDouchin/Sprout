import { Component } from "../ECS"

class Data extends Component {
	constructor(data: any) {
		super()
		Object.assign(this, data)
	}
	destroy() { }
}
export default Data