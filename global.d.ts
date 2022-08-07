interface planeImage {
	buffer?: CanvasRenderingContext2D
	texture?: THREE.Texture
	material?: typeof THREE.MeshBasicMaterial | typeof THREE.MeshStandardMaterial
}

interface UIModule {
	mesh: THREE.Group
	position: string
	name: string
	click: Function
}

interface position {
	x: number
	y: number
}