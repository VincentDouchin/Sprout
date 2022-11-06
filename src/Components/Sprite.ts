
import AssetManager from "../AssetManager"
import Coroutines from "../Coroutines"
import Buffer from "../utils/Buffer"
import { getRadianAngle, waitFor } from "../utils/Functions"
import Plane from "./Plane"

type SpriteOptions = {
	animations: string[]
	state?: string
	img: string
	tileSize: number
	repeat?: boolean
	backwards?: boolean
	startAnimation?: boolean
	speed?: number
	selectedSprite?: number
	animationCounter?: number
	animationsLength?: any
	spriteNb?: any
	character?: boolean
	renderOrder?: number
}
class Sprite extends Plane {
	repeat: boolean
	backwards: boolean
	once: boolean
	startAnimation: boolean
	speed = 4
	selectedSprite = 0
	animationCounter = 0
	animationsLength = {}
	spriteNb = {}
	direction = 'down'
	character: boolean
	state: string
	animations: string[]
	image: HTMLImageElement
	tilesNb: { vertical: number, horizontal: number }

	tileSize: number

	constructor({ animations, state, img, tileSize, repeat = true, backwards = false, startAnimation = true, speed = 4, selectedSprite = 0, animationCounter = 0, animationsLength = {}, renderOrder = 0, character = false }: SpriteOptions) {

		const image = AssetManager.images[img]
		const buffer = Buffer(image.width, image.height)
		buffer.drawImage(image, 0, 0)
		super({ buffer }, tileSize, tileSize)
		this.repeat = repeat
		this.backwards = backwards
		this.startAnimation = startAnimation
		this.speed = speed
		this.selectedSprite = selectedSprite
		this.animationCounter = animationCounter
		this.animationsLength = animationsLength
		this.animations = animations
		this.tileSize = tileSize
		this.state = state ?? animations[0]

		this.character = character
		this.tilesNb = {
			vertical: image.height / tileSize,
			horizontal: image.width / tileSize
		}


		this.mesh.renderOrder = renderOrder
		this.spriteNb = this.animations.reduce((acc, v) => ({ ...acc, [v]: this.animationsLength[state] ?? this.tilesNb.horizontal }), {})

		this.mesh.material['map'].repeat.set(1 / this.tilesNb.horizontal, 1 / this.tilesNb.vertical)
		this.mesh.material['map'].offset.set(this.offsetX, this.offsetY)


	}
	get offsetX() {
		return (this.backwards ? this.spriteNb[this.state] - this.selectedSprite - 1 : this.selectedSprite) / this.tilesNb.horizontal
	}
	get offsetY() {
		return 1 - ((this.animations.findIndex(animation => animation == this.state) + 1) / this.tilesNb.vertical)
	}

	playAnimation(animationName: string) {
		this.startAnimation = true
		const nb = this.animationsLength[animationName] * this.speed
		return new Promise<void>(resolve => {
			Coroutines.add(function* () {
				yield* waitFor(nb)
				resolve()
				return
			})
		})
	}

}

export default Sprite