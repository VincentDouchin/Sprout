import { Component } from "../ECS";
import RendererSystem from "../Systems/RendererSystem";

import { CanvasTexture, NearestFilter, PlaneGeometry, Mesh, MeshStandardMaterial, Sprite, SpriteMaterial } from 'three'
import MeshComponent from "./MeshComponent";
class SpriteComponent extends MeshComponent {
	rendered = false
	buffer: CanvasRenderingContext2D
	width: number
	height: number
	scale: number
	offsetX = 0
	offsetY = 0
	renderOrder: number
	constructor(image: CanvasRenderingContext2D, options?: any) {
		super(image, options.width, options.height, options)
		this.renderOrder = options?.renderOrder * 10 ?? 0
		this.scale = options?.scale ?? 1

		this.width = options?.width ?? image.canvas.width
		this.height = options?.height ?? image.canvas.height

		// const canvasTexture = new CanvasTexture(this.buffer.canvas)
		// canvasTexture.minFilter = NearestFilter
		// canvasTexture.magFilter = NearestFilter
		// const geometry = new PlaneGeometry(this.width, this.height)
		// const meshMaterial = new (options?.material ?? MeshStandardMaterial)({ map: canvasTexture, transparent: true, })

		// this.mesh = new Mesh(geometry, meshMaterial)
	}


}
export default SpriteComponent