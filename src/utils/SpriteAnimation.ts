import Buffer from './Buffer'
import getPlane from './Plane'
import { scene } from '../Initialize'
import AssetManager from '../AssetManager'
interface SpriteAnimationOptions {
	img: string
	animations: string[]
	tileSize: number
	repeat?: boolean
	autoStart?: boolean
	onAnimationFinished?: Function
	animationsLength?: any
	defaultAnimation?: any
	backwards?: boolean
	speed?: number
	once?: boolean
}
const SpriteAnimation = ({ repeat = true, autoStart = true, defaultAnimation, img, animations, tileSize, onAnimationFinished, animationsLength = {}, backwards = false, speed = 4, once = false }: SpriteAnimationOptions) => {

	let state = defaultAnimation ?? animations[0]
	const image: HTMLImageElement = AssetManager.images[img]

	const tilesNb = { vertical: image.height / tileSize, horizontal: image.width / tileSize }

	const buffer = Buffer(image.width, image.height)
	buffer.drawImage(image, 0, 0)
	const mesh: THREE.Mesh = getPlane({ buffer }, tileSize, tileSize,)

	let selectedSprite = 0
	let animationCounter = 0
	let isReversed = backwards
	let isFinished = !once
	let startAnimation = autoStart
	const getOffset = (state: string) => {
		const spriteNb = animationsLength[state] ?? tilesNb.horizontal
		return {
			x: (isReversed ? spriteNb - selectedSprite - 1 : selectedSprite) / tilesNb.horizontal,
			y: 1 - ((animations.findIndex(animation => animation == state) + 1) / tilesNb.vertical),
		}
	}

	const { x, y } = getOffset(state)

	mesh.material['map'].repeat.set(1 / tilesNb.horizontal, 1 / tilesNb.vertical)
	mesh.material['map'].offset.set(x, y)

	// mesh.renderOrder = 0
	scene.add(mesh)

	const update = () => {
		if ((repeat || !isFinished) && startAnimation) {
			const spriteNb = animationsLength[state] ?? tilesNb.horizontal
			animationCounter++
			if (animationCounter > speed) {
				animationCounter = 0
				selectedSprite = (selectedSprite + 1) % spriteNb
			}

			const { x, y } = getOffset(state)
			mesh.material['map'].offset.set(x, y)
			if (selectedSprite == spriteNb - 1) {
				isFinished = true
				if (onAnimationFinished) onAnimationFinished()

			}
		}

	}
	const reverse = () => {
		isReversed = !isReversed
	}
	const start = () => {
		startAnimation = true
	}
	const reset = () => {
		isFinished = false
	}
	const setState = (_state: string) => {
		state = _state
	}
	const setOnAnimationFinished = (fn: Function) => {
		onAnimationFinished = fn
	}


	return { mesh, update, reverse, start, reset, setState, setOnAnimationFinished }
}

export default SpriteAnimation