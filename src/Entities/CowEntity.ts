
import { Box, Vec2 } from "planck"
import AssetManager from "../AssetManager"
import AnimationComponent from "../Components/AnimationComponent"
import BodyComponent from "../Components/BodyComponent"
import SpriteComponent from "../Components/SpriteComponent"
import PositionComponent from "../Components/PositionComponent"
import { Entity } from "../ECS"

const CowEntity = ({ x, y }) => {

	return new Entity(
		new SpriteComponent(AssetManager.fromString(`Light cow animations`), { renderOrder: 1, width: 32, height: 32 }),
		new AnimationComponent({
			animations: ['idle', 'run'],
			tileSize: 32,
			animationsLength: { idle: 3 },
			state: 'idle',
			speed: 16,
			verticalTilesNb: 8,
			horizontalTilesNb: 8
		}),
		new PositionComponent(x, y),
		new BodyComponent({
			type: 'dynamic',
			fixedRotation: true,
			bullet: true,
		}, [{
			shape: Box(16, 24, Vec2(0, 0), 0),
			density: 1,
		}]),

	)
}
export default CowEntity