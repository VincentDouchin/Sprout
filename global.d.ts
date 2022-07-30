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
	mesh: THREE.Group
	position: string
	name: string
	click: Function
}