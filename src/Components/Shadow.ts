import { CanvasTexture, Mesh, MeshBasicMaterial, NearestFilter, PlaneGeometry } from "three";
import { Component } from "../ECS";
import Buffer from '../utils/Buffer'
class Shadow extends Component {
	rendered = false
	width: number
	height: number
	mesh: Mesh
	offset: number
	constructor(width: number, height: number, offset: number) {
		super()
		this.width = width
		this.height = height
		this.offset = offset
		const buffer = Buffer(this.width, this.height)
		buffer.fillStyle = 'black'
		buffer.ellipse(this.width / 2, this.height / 2, this.width / 2, this.height / 2, 0, 0, 2 * Math.PI);
		buffer.fill()
		const canvasTexture = new CanvasTexture(buffer.canvas)
		canvasTexture.minFilter = NearestFilter
		canvasTexture.magFilter = NearestFilter
		this.mesh = new Mesh(
			new PlaneGeometry(this.width, this.height),
			new MeshBasicMaterial({ map: canvasTexture, transparent: true, opacity: 0.2 }))


	}
	destroy(): void {
		this.mesh.parent.remove(this.mesh.parent.getObjectById(this.mesh.id))
	}


}
export default Shadow