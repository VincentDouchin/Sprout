import Body from "../Components/Body"
import Sprite from "../Components/Sprite"
import { Entity } from "../ECS"
import { Box, Vec2 } from 'planck'
import Position from "../Components/Position"
import FarmableComponent from "../Components/Farmable"

const Farmable = (options) => {
	return new Entity(
		new Sprite({
			animations: ['maizeTop', 'maizeBottom', 'carrot', 'cauliflower', 'tomato', 'eggplant', 'blue tulip', 'lettuce', 'wheat', 'pumpkin', 'raddish', 'red flower', 'beet', 'star', 'cucumber'],
			animationsLength: { 'maizeTop': 5, 'maizeBottom': 5, 'carrot': 4, 'cauliflower': 4, 'tomato': 4, 'eggplant': 4, 'blue tulip': 4, 'lettuce': 4, 'wheat': 4, 'pumpkin': 4, 'raddish': 4, 'red flower': 4, 'beet': 4, 'star': 4, 'cucumber': 4 },
			tileSize: 16,
			startAnimation: false,
			repeat: false,
			img: 'Farming Plants',
			state: 'carrot',
			speed: 1,
			renderOrder: 1
		}),
		new Body(
			{ type: 'static', },
			[{
				shape: Box(8, 8, Vec2(0, 0), 0),
				density: 0,
				isSensor: true,
			}]
		),
		new Position(options.x, options.y),
		new FarmableComponent(options.wet, 'carrot', options.growth)

	)
}
export default Farmable