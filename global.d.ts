// interface planeImage {
// 	buffer?: CanvasRenderingContext2D
// 	texture?: THREE.Texture
// 	material?: typeof THREE.MeshBasicMaterial | typeof THREE.MeshStandardMaterial
// }

// interface UIModule {
// 	mesh: THREE.Group
// 	position: string
// 	name: string
// 	click: Function
// }

interface position {
	x: number
	y: number
}
// interface Entity {
// 	id: string,
// 	sprite?: Sprite
// 	body?: planck.Body
// 	fixture?: planck.Fixture
// 	fixtures?: planck.Fixture[]
// 	data: any
// 	type: string
// 	position: position
// 	interactable: boolean
// }
// interface Sprite {
// 	repeat: boolean
// 	animationsLength: object
// 	backwards: boolean
// 	speed: number
// 	once: boolean
// 	selectedSprite: number
// 	animationCounter: number
// 	startAnimation: boolean
// 	tileSize: number
// 	mesh: THREE.Mesh
// 	state: string
// 	animations: string[]
// 	onAnimationFinished: Function
// 	tilesNb: { vertical: number, horizontal: number }
// 	spriteNb: any
// }
type Constructor<T> = new (...args: any[]) => T;
interface Saver {
	save: Function
	load: Function
}