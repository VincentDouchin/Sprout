import Body from "../Components/Body"
import { Entity } from "../ECS"
import { Box, Vec2 } from 'planck'
import Position from "../Components/Position"
import FarmableComponent from "../Components/Farmable"
import Sprite from "../Components/Sprite"
import AssetManager from "../AssetManager"
import Animation from "../Components/Animation"

const Plant = (options) => {
	return new Entity(
		new Sprite(AssetManager.fromString('Farming Plants'), { renderOrder: 1, width: 16, height: 16 }),
		new Animation({
			animations: ['maizeTop', 'maizeBottom', 'carrot', 'cauliflower', 'tomato', 'eggplant', 'blue tulip', 'lettuce', 'wheat', 'pumpkin', 'raddish', 'red flower', 'beet', 'star', 'cucumber'],
			animationsLength: { 'maizeTop': 5, 'maizeBottom': 5, 'carrot': 4, 'cauliflower': 4, 'tomato': 4, 'eggplant': 4, 'blue tulip': 4, 'lettuce': 4, 'wheat': 4, 'pumpkin': 4, 'raddish': 4, 'red flower': 4, 'beet': 4, 'star': 4, 'cucumber': 4 },
			tileSize: 16,
			startAnimation: false,
			state: 'carrot',
			speed: 1,
			verticalTilesNb: 15,
			horizontalTilesNb: 5
		}),
		new Body(
			{ type: 'static', allowSleep: false },
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
export default Plant