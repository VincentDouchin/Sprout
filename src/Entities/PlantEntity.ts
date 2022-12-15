import BodyComponent from "../Components/BodyComponent"
import { Entity } from "../ECS"
import { Box, Vec2 } from 'planck'
import PositionComponent from "../Components/PositionComponent"
import FarmableComponent from "../Components/FarmableComponent"
import SpriteComponent from "../Components/SpriteComponent"
import AssetManager from "../AssetManager"
import AnimationComponent from "../Components/AnimationComponent"

const PlantEntity = (options) => {
	return new Entity(
		new SpriteComponent(AssetManager.fromString('Farming Plants'), { renderOrder: 1, width: 16, height: 16 }),
		new AnimationComponent({
			animations: ['maizeTop', 'maizeBottom', 'carrot', 'cauliflower', 'tomato', 'eggplant', 'blue tulip', 'lettuce', 'wheat', 'pumpkin', 'raddish', 'red flower', 'beet', 'star', 'cucumber'],
			animationsLength: { 'maizeTop': 5, 'maizeBottom': 5, 'carrot': 4, 'cauliflower': 4, 'tomato': 4, 'eggplant': 4, 'blue tulip': 4, 'lettuce': 4, 'wheat': 4, 'pumpkin': 4, 'raddish': 4, 'red flower': 4, 'beet': 4, 'star': 4, 'cucumber': 4 },
			tileSize: 16,
			startAnimation: false,
			state: 'carrot',
			speed: 1,
			verticalTilesNb: 15,
			horizontalTilesNb: 5
		}),
		new BodyComponent(
			{
				type: 'static',
				allowSleep: false
			},
			[{
				shape: Box(8, 8, Vec2(0, 0), 0),
				density: 0,
				isSensor: true,
			}]
		),
		new PositionComponent(options.x, options.y),
		new FarmableComponent(options.wet, 'carrot', options.growth)

	)
}
export default PlantEntity