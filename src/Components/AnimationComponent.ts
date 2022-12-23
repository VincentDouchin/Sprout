import Coroutines from "../Coroutines";
import { Component } from "../ECS";
import { waitFor } from "../utils/Functions";
interface animationOptions {
	backwards?: boolean
	animations?: string[]
	selectedSprite?: number
	animationsLength?: any
	verticalTilesNb: number
	horizontalTilesNb: number
	tileSize: number
	direction?: boolean
	state?: string
	startAnimation?: boolean
	speed?: number

}

class AnimationComponent extends Component {

	backwards = false
	animations = []
	selectedSprite = 0
	direction = false
	state = 'idle'
	animationsLength = {}
	horizontalTilesNb = 0
	verticalTilesNb = 0
	tileSize = 0
	selectecSprite = 0
	animationCounter = 0
	speed = 4
	startAnimation = true
	selectedDirection = 'down'
	isAnimationPlaying = false
	constructor(options: animationOptions) {
		super(arguments)
		Object.assign(this, options)
	}
	get selectedState() {
		return this.direction ? this.state + '-' + this.selectedDirection : this.state
	}
	get offsetX() {
		return (this.backwards ? this.spriteNb[this.selectedState] - this.selectedSprite - 1 : this.selectedSprite) / this.horizontalTilesNb
	}
	get offsetY() {
		return 1 - ((this.animations.findIndex(animation => animation == this.selectedState) + 1) / this.verticalTilesNb)
	}
	get spriteNb() {
		return this.animations.reduce((acc, v) => ({ ...acc, [v]: this.animationsLength[this.state] ?? this.horizontalTilesNb }), {})
	}
	playAnimation(animationName: string, speed?: number) {
		if (this.isAnimationPlaying) return new Promise<void>((resolve, reject) => reject())
		const initialStart = this.startAnimation
		const initialState = this.state
		const initialSpeed = this.speed
		this.isAnimationPlaying = true
		this.startAnimation = true
		if (speed) this.speed = speed
		this.state = animationName
		const nb = (this.animationsLength[animationName] ?? this.horizontalTilesNb) * this.speed
		return new Promise<void>(resolve => {
			Coroutines.add(function* () {
				yield* waitFor(nb)
				resolve()
				return
			})
		}).then(() => {
			this.state = initialState
			this.speed = initialSpeed
			this.startAnimation = initialStart
			this.isAnimationPlaying = false
		})
	}


}
export default AnimationComponent