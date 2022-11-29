import { Component } from "../ECS";
import Renderer from "../Systems/Renderer";

import { CanvasTexture, NearestFilter, PlaneGeometry, Mesh, MeshStandardMaterial } from 'three'
class Sprite extends Component {
	rendered = false
	buffer: CanvasRenderingContext2D
	width: number
	height: number
	scale = 1
	mesh: THREE.Mesh
	offsetX = 0
	offsetY = 0
	renderOrder: number
	constructor(image: CanvasRenderingContext2D, options?: any) {
		super()
		this.renderOrder = options?.renderOrder * 10 ?? 0
		this.buffer = image
		this.width = options?.width ?? this.buffer.canvas.width
		this.height = options?.height ?? this.buffer.canvas.height
		const canvasTexture = new CanvasTexture(this.buffer.canvas)
		canvasTexture.minFilter = NearestFilter
		canvasTexture.magFilter = NearestFilter
		const geometry = new PlaneGeometry(this.width, this.height)
		const meshMaterial = new (options?.material ?? MeshStandardMaterial)({ map: canvasTexture, transparent: true, })
		this.mesh = new Mesh(geometry, meshMaterial)
	}
	destroy(): void {
		this.mesh.parent.remove(this.mesh.parent.getObjectById(this.mesh.id))
	}
}
export default Sprite