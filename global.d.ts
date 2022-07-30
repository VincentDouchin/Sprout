interface planeImage {
	buffer?: CanvasRenderingContext2D
	texture?: THREE.Texture
	material?: any
}
interface teleport {
	from: string
	type: string
}
interface UIModule {
	mesh: THREE.Mesh
	position: string
	name: string
}