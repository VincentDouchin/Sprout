import AssetManager from "../AssetManager"
import { scene } from "../Initialize"
import Buffer from "../utils/Buffer"
import getPlane from "../utils/Plane"

class sprite {
	repeat = true
	autoStart = true
	animationsLength = {}
	backwards = false
	speed = 4
	once = false
	selectedSprite = 0
	animationCounter = 0
	startAnimation = true

	state: string
	image: HTMLImageElement
	tileSize: number
	tilesNb: { vertical: number, horizontal: number }
	mesh: THREE.Mesh
	animations: string[]
	onAnimationFinished: Function

	constructor(options) {
		Object.assign(this, options)
		this.state = options?.defaultAnimation ?? options.animations[0]
		this.image = AssetManager.images[options.img]
		this.tilesNb = { vertical: this.image.height / this.tileSize, horizontal: this.image.width / this.tileSize }

		const buffer = Buffer(this.image.width, this.image.height)
		buffer.drawImage(this.image, 0, 0)
		this.mesh = getPlane({ buffer }, this.tileSize, this.tileSize,)
		const { x, y } = this.getOffset(this.state)
		this.mesh.material['map'].repeat.set(1 / this.tilesNb.horizontal, 1 / this.tilesNb.vertical)
		this.mesh.material['map'].offset.set(x, y)
		scene.add(this.mesh)
	}
	private getOffset(state: string) {
		const spriteNb = this.animationsLength[state] ?? this.tilesNb.horizontal
		return {
			x: (this.backwards ? spriteNb - this.selectedSprite - 1 : this.selectedSprite) / this.tilesNb.horizontal,
			y: 1 - ((this.animations.findIndex(animation => animation == state) + 1) / this.tilesNb.vertical),
		}
	}
	update() {
		if ((this.repeat || !this.once) && this.startAnimation) {
			const spriteNb = this.animationsLength[this.state] ?? this.tilesNb.horizontal
			this.animationCounter++
			if (this.animationCounter > this.speed) {
				this.animationCounter = 0
				this.selectedSprite = (this.selectedSprite + 1) % spriteNb
			}

			const { x, y } = this.getOffset(this.state)
			this.mesh.material['map'].offset.set(x, y)
			if (this.selectedSprite == spriteNb - 1) {
				this.once = true
				if (this.onAnimationFinished) this.onAnimationFinished()

			}
		}

	}
	reverse() {
		this.backwards = !this.backwards
	}
	start() {
		this.startAnimation = true
	}
	reset() {
		this.once = false
	}
	setState(_state: string) {
		this.state = _state
	}
	setOnAnimationFinished(fn: Function) {
		this.onAnimationFinished = fn
	}
}

export default sprite