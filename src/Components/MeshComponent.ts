import { Component } from "../ECS";
import MeshManager from "../MeshManager";

class MeshComponent extends Component {
	meshId: number
	rendered = false
	get mesh() {

		return MeshManager.getMesh(this.meshId)
	}
	constructor(ctx: CanvasRenderingContext2D, width?: number, height?: number, options?: any) {
		super(arguments)
		this.meshId = MeshManager.addMesh(ctx, width, height, options)
	}

	destroy(): void {
		this.mesh.parent.remove(this.mesh.parent.getObjectById(this.mesh.id))
	}
	addTo(target: THREE.Object3D) {
		target.add(this.mesh)
		this.rendered = true
	}
}
export default MeshComponent