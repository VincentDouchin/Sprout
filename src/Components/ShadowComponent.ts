import Buffer from '../utils/Buffer'
import MeshComponent from "./MeshComponent";
class ShadowComponent extends MeshComponent {
	offset: number
	constructor(width: number, height: number, offset: number) {

		const buffer = Buffer(width, height)
		buffer.fillStyle = 'black'
		buffer.ellipse(width / 2, height / 2, width / 2, height / 2, 0, 0, 2 * Math.PI)
		buffer.fill()
		super(buffer)
		this.mesh.material.opacity = 0.2
		this.mesh.position.set(0, -offset, 0)
	}




}
export default ShadowComponent