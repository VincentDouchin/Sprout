
import AssetManager from "../AssetManager"
import { scene } from "../Initialize"
import Buffer from "../utils/Buffer"
import getPlane from "../utils/Plane"

// class sprite {
// 	repeat = true
// 	autoStart = true
// 	animationsLength = {}
// 	backwards = false
// 	speed = 4
// 	once = false
// 	selectedSprite = 0
// 	animationCounter = 0
// 	startAnimation = true

// 	state: string
// 	image: HTMLImageElement
// 	tileSize: number
// 	tilesNb: { vertical: number, horizontal: number }
// 	mesh: THREE.Mesh
// 	animations: string[]
// 	onAnimationFinished: Function

// 	constructor(options) {
// 		Object.assign(this, options)
// 		this.state = options?.defaultAnimation ?? options.animations[0]
// 		this.image = AssetManager.images[options.img]
// 		this.tilesNb = { vertical: this.image.height / this.tileSize, horizontal: this.image.width / this.tileSize }

// 		const buffer = Buffer(this.image.width, this.image.height)
// 		buffer.drawImage(this.image, 0, 0)
// 		this.mesh = getPlane({ buffer }, this.tileSize, this.tileSize,)
// 		const { x, y } = this.getOffset(this.state)
// 		this.mesh.material['map'].repeat.set(1 / this.tilesNb.horizontal, 1 / this.tilesNb.vertical)
// 		this.mesh.material['map'].offset.set(x, y)
// 		scene.add(this.mesh)
// 	}
// 	private getOffset(state: string) {
// 		const spriteNb = this.animationsLength[state] ?? this.tilesNb.horizontal
// 		return {
// 			x: (this.backwards ? spriteNb - this.selectedSprite - 1 : this.selectedSprite) / this.tilesNb.horizontal,
// 			y: 1 - ((this.animations.findIndex(animation => animation == state) + 1) / this.tilesNb.vertical),
// 		}
// 	}
// 	update() {
// 		if ((this.repeat || !this.once) && this.startAnimation) {
// 			const spriteNb = this.animationsLength[this.state] ?? this.tilesNb.horizontal
// 			this.animationCounter++
// 			if (this.animationCounter > this.speed) {
// 				this.animationCounter = 0
// 				this.selectedSprite = (this.selectedSprite + 1) % spriteNb
// 			}

// 			const { x, y } = this.getOffset(this.state)
// 			this.mesh.material['map'].offset.set(x, y)
// 			if (this.selectedSprite == spriteNb - 1) {
// 				this.once = true
// 				if (this.onAnimationFinished) this.onAnimationFinished()

// 			}
// 		}

// 	}
// 	reverse() {
// 		this.backwards = !this.backwards
// 	}
// 	start() {
// 		this.startAnimation = true
// 	}
// 	reset() {
// 		this.once = false
// 	}
// 	setState(_state: string) {
// 		this.state = _state
// 	}
// 	setOnAnimationFinished(fn: Function) {
// 		this.onAnimationFinished = fn
// 	}
// }
interface Sprite {
	repeat: boolean
	autoStart: boolean
	animationsLength: object
	backwards: boolean
	speed: number
	once: boolean
	selectedSprite: number
	animationCounter: number
	startAnimation: boolean
	tileSize: number
	mesh: THREE.Mesh
	state: string
	animations: string[]
	onAnimationFinished: Function
	tilesNb: { vertical: number, horizontal: number }

}
const Sprite = {

	create(options): Sprite {
		const sprite = {
			repeat: true,
			autoStart: true,
			animationsLength: {},
			backwards: false,
			speed: 4,
			once: false,
			selectedSprite: 0,
			animationCounter: 0,
			startAnimation: true,
			...options
		}
		sprite.state = options?.defaultAnimation ?? options.animations[0]
		sprite.image = AssetManager.images[options.img]
		sprite.tilesNb = { vertical: sprite.image.height / options.tileSize, horizontal: sprite.image.width / options.tileSize }

		const buffer = Buffer(sprite.image.width, sprite.image.height)
		buffer.drawImage(sprite.image, 0, 0)
		sprite.mesh = getPlane({ buffer }, options.tileSize, options.tileSize,)

		const { x, y } = Sprite.getOffset(sprite)
		sprite.mesh.material['map'].repeat.set(1 / sprite.tilesNb.horizontal, 1 / sprite.tilesNb.vertical)
		sprite.mesh.material['map'].offset.set(x, y)
		scene.add(sprite.mesh)
		return sprite

	},
	getOffset(sprite: Sprite) {
		const spriteNb = sprite.animationsLength[sprite.state] ?? sprite.tilesNb.horizontal
		return {
			x: (sprite.backwards ? spriteNb - sprite.selectedSprite - 1 : sprite.selectedSprite) / sprite.tilesNb.horizontal,
			y: 1 - ((sprite.animations.findIndex(animation => animation == sprite.state) + 1) / sprite.tilesNb.vertical),
		}
	},
	update(sprite: Sprite) {
		if ((sprite.repeat || !sprite.once) && sprite.startAnimation) {
			const spriteNb = sprite.animationsLength[sprite.state] ?? sprite.tilesNb.horizontal
			sprite.animationCounter++
			if (sprite.animationCounter > sprite.speed) {
				sprite.animationCounter = 0
				sprite.selectedSprite = (sprite.selectedSprite + 1) % spriteNb
			}

			const { x, y } = Sprite.getOffset(sprite)
			sprite.mesh.material['map'].offset.set(x, y)
			if (sprite.selectedSprite == spriteNb - 1) {
				sprite.once = true
				if (sprite.onAnimationFinished) sprite.onAnimationFinished()

			}
		}

	},
	setPosition(sprite: Sprite, position: planck.Vec2) {

		sprite.mesh.position.x = position.x
		sprite.mesh.position.y = position.y
	},
	destroy(sprite: Sprite) {
		// scene.remove(sprite.mesh)
		sprite.mesh.geometry.dispose()

		scene.remove(scene.getObjectById(sprite.mesh.id))
	}
}

export default Sprite