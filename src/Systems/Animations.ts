import { Entity, System } from "../ECS";

const Animations = new System(
	'Sprite',
	(entity: Entity, sprite) => {
		const body = entity.getComponent('Body')
		const x = sprite.offsetX
		const y = sprite.offsetY
		sprite.mesh.material['map'].offset.set(x, y)
		if (sprite.repeat || sprite.startAnimation) {
			sprite.animationCounter++
			if (sprite.animationCounter > sprite.speed) {
				sprite.animationCounter = 0
				sprite.selectedSprite = (sprite.selectedSprite + 1) % sprite.spriteNb[sprite.state]
			}

			if (!sprite.repeat && sprite.selectedSprite === sprite.spriteNb[sprite.state] - 1) {
				sprite.startAnimation = false

			}
		}
		if (body && sprite.character) {
			sprite.state = (body.idle ? 'moving' : 'idle') + '-' + sprite.direction

		}
	}

)
export default Animations