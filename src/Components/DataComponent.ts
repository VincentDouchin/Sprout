import { Component } from "../ECS"

class DataComponent extends Component {
	constructor(data: any) {
		super(arguments)
		Object.assign(this, data)
	}
	destroy() { }
}
export default DataComponent