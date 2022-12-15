import SpriteComponent from "../../Components/SpriteComponent"
import { Component } from "../../ECS"


class UITransform extends Component {
	parentx: number
	parenty: number
	selfx: number
	selfy: number
	x: number
	y: number
	constructor(parentx: number, parenty: number, selfx: number = 0.5, selfy: number = 0.5) {
		super()
		this.parentx = parentx
		this.parenty = parenty
		this.selfx = selfx
		this.selfy = selfy
	}

}
export default UITransform