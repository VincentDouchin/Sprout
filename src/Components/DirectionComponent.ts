import { Component } from "../ECS";

class DirectionComponent extends Component {
	direction = 'down'
	constructor() {
		super(arguments)
	}
}
export default DirectionComponent