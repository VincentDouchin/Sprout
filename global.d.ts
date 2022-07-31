interface planeImage {
	buffer?: CanvasRenderingContext2D
	texture?: THREE.Texture
	material?: typeof THREE.MeshBasicMaterial | typeof THREE.MeshStandardMaterial
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