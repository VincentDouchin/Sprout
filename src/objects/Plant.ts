import Sprite from "../Components/Sprite"
import Entity from "../Components/Entity"
import { Box, Vec2 } from "planck"

const plantsSprite = {
	animations: ['maizeTop', 'maizeBottom', 'carrot', 'cauliflower', 'tomato', 'eggplant', 'blue tulip', 'lettuce', 'wheat', 'pumpkin', 'raddish', 'red flower', 'beet', 'star', 'cucumber'],
	animationsLength: { 'maizeTop': 5, 'maizeBottom': 5, 'carrot': 4, 'cauliflower': 4, 'tomato': 4, 'eggplant': 4, 'blue tulip': 4, 'lettuce': 4, 'wheat': 4, 'pumpkin': 4, 'raddish': 4, 'red flower': 4, 'beet': 4, 'star': 4, 'cucumber': 4 },
	tileSize: 16,
	startAnimation: false,
	img: 'Farming Plants'
}
const Plant = {
	create(position: position, type: string) {
		const plant = Entity.create({
			sprite: { ...plantsSprite, state: type },
			body: {
				type: 'static',
			},
			fixture: {
				shape: Box(8, 8, Vec2(0, 0), 0),
				density: 0,
				isSensor: true,
				userData: { type: 'plant' }
			},
			position: { x: position.x, y: position.y }
		})
		return plant

	}
}
export default Plant