import { MeshStandardMaterial, NearestFilter, CanvasTexture, PlaneGeometry, Mesh } from "three"
import { Component } from "../ECS";
import { scene } from "../Initialize"

interface Constructable<T> {
	new(...args: any): T;
}
interface planeImage {
	buffer?: CanvasRenderingContext2D
	texture?: THREE.Texture
	material?: Constructable<THREE.Material>
}

class Plane extends Component {
	mesh: THREE.Mesh
	constructor(planeImage: planeImage, width?: number, height?: number) {
		super()
		const { buffer, texture, material = MeshStandardMaterial } = planeImage
		let text = null

		if (buffer) {
			const canvasTexture = new CanvasTexture(buffer.canvas)
			canvasTexture.minFilter = NearestFilter;
			canvasTexture.magFilter = NearestFilter;
			text = canvasTexture
		} else {
			text = texture
		}

		const geometry = new PlaneGeometry(width ?? buffer.canvas.width, height ?? buffer.canvas.height)
		const meshMaterial = new material({ map: text, transparent: true, })!
		this.mesh = new Mesh(geometry, meshMaterial)
		scene.add(this.mesh)
	}
	destroy() {
		console.log(this.mesh.id)
		const id = this.mesh.id
		this.mesh.geometry.dispose()
		scene.remove(scene.getObjectById(id))
	}
}
export default Plane