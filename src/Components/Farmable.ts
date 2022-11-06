import { Component } from "../ECS";

class FarmableComponent extends Component {
	wet: boolean
	plant: string
	constructor(wet = false, plant = '') {
		super()
		this.wet = wet
		this.plant = plant
	}
}
export default FarmableComponent