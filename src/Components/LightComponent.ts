import { AmbientLight } from 'three'
import { Component } from '../ECS'
import { scene } from '../Initialize'
class LightComponent extends Component {
	light: THREE.Light
	constructor() {
		super(arguments)
		this.light = new AmbientLight(0xffffff)
		scene.add(this.light)
	}
	destroy() {
		scene.remove(this.light)
	}
	save() {
		return { id: this.id }
	}
}
export default LightComponent