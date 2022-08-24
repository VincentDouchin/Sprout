
import AssetManager from "../AssetManager"
import { scene } from "../Initialize"
import Buffer from "../utils/Buffer"
import getPlane from "../utils/Plane"

const Sprite = {

	create(options): Sprite {
		const sprite = {
			repeat: true,
			animationsLength: {},
			backwards: false,
			speed: 4,
			once: false,
			selectedSprite: 0,
			animationCounter: 0,
			startAnimation: true,
			...options
		}

		sprite.state = options?.state ?? options.animations[0]
		sprite.image = AssetManager.images[options.img]
		sprite.tilesNb = { vertical: sprite.image.height / options.tileSize, horizontal: sprite.image.width / options.tileSize }

		const buffer = Buffer(sprite.image.width, sprite.image.height)
		buffer.drawImage(sprite.image, 0, 0)
		sprite.mesh = getPlane({ buffer }, options.tileSize, options.tileSize,)

		sprite.spriteNb = options.animations.reduce((acc, v) => ({ ...acc, [v]: sprite.animationsLength[sprite.state] ?? sprite.tilesNb.horizontal }), {})
		const { x, y } = Sprite.getOffset(sprite)
		sprite.mesh.material['map'].repeat.set(1 / sprite.tilesNb.horizontal, 1 / sprite.tilesNb.vertical)
		sprite.mesh.material['map'].offset.set(x, y)
		scene.add(sprite.mesh)
		return sprite

	},
	getOffset(sprite: Sprite) {
		return {
			x: (sprite.backwards ? sprite.spriteNb[sprite.state] - sprite.selectedSprite - 1 : sprite.selectedSprite) / sprite.tilesNb.horizontal,
			y: 1 - ((sprite.animations.findIndex(animation => animation == sprite.state) + 1) / sprite.tilesNb.vertical),
		}
	},
	update(sprite: Sprite) {
		if ((sprite.repeat || sprite.once) && sprite.startAnimation) {
			sprite.animationCounter++
			if (sprite.animationCounter > sprite.speed) {
				sprite.animationCounter = 0
				sprite.selectedSprite = (sprite.selectedSprite + 1) % sprite.spriteNb[sprite.state]
			}


		}
		const { x, y } = Sprite.getOffset(sprite)
		sprite.mesh.material['map'].offset.set(x, y)
		if (sprite.selectedSprite == sprite.spriteNb[sprite.state] - 1) {
			sprite.once = true

			if (sprite.onAnimationFinished) {
				sprite.onAnimationFinished()
			}

		}

	},
	step(sprite: Sprite) {
		sprite.selectedSprite = (sprite.selectedSprite + 1) % sprite.spriteNb[sprite.state]
	},


	setPosition(sprite: Sprite, position: position) {

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