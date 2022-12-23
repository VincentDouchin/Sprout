import { Component } from "../ECS";

class FarmableComponent extends Component {
	wet: boolean
	plant: string
	growth: number
	constructor(wet = false, plant = '', growth = 0) {
		super(arguments)
		this.wet = wet
		this.plant = plant
		this.growth = growth
	}
}
export default FarmableComponent