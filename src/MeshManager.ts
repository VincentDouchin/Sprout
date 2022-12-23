import { CanvasTexture, Mesh, MeshBasicMaterial, MeshStandardMaterial, NearestFilter, ObjectLoader, PlaneGeometry } from "three"

const MeshManager = new class {
	meshes = new Map()
	addMesh(buffer: CanvasRenderingContext2D, width?: number, height?: number, options?: any) {
		const canvasTexture = new CanvasTexture(buffer.canvas)
		canvasTexture.minFilter = NearestFilter
		canvasTexture.magFilter = NearestFilter
		const geometry = new PlaneGeometry(width ?? buffer.canvas.width, height ?? buffer.canvas.height)
		const meshMaterial = new (MeshBasicMaterial)({ map: canvasTexture, transparent: true, })
		// const meshMaterial = new (options?.material ?? MeshStandardMaterial)({ map: canvasTexture, transparent: true, })

		const mesh = new Mesh(geometry, meshMaterial)
		this.meshes.set(String(mesh.id), mesh)
		return mesh.id
	}
	getMesh(meshId: number) {
		// if (!this.meshes.get(String(meshId))) debugger
		return this.meshes.get(String(meshId))
	}
	addObject(obj: THREE.Object3D) {
		this.meshes.set(String(obj.id), obj)
	}
	load(meshes: Object) {
		const objectLoader = new ObjectLoader()
		Object.entries(meshes).forEach(([id, meshAsJSON]) => {
			this.meshes.set(id, objectLoader.parse(meshAsJSON))
		})
	}
}
export default MeshManager