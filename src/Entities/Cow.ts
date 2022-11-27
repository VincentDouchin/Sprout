
import { Box, Vec2 } from "planck"
import AssetManager from "../AssetManager"
import Animation from "../Components/Animation"
import Body from "../Components/Body"
import Sprite from "../Components/Sprite"
import Position from "../Components/Position"
import { Entity } from "../ECS"

const Cow = ({ x, y }) => {

	return new Entity(
		new Sprite(AssetManager.fromString(`Light cow animations`), { renderOrder: 1, width: 32, height: 32 }),
		new Animation({
			animations: ['idle', 'run'],
			tileSize: 32,
			animationsLength: { idle: 3 },
			state: 'idle',
			speed: 16,
			verticalTilesNb: 8,
			horizontalTilesNb: 8
		}),
		new Position(x, y),
		new Body({
			type: 'dynamic',
			fixedRotation: true,
			bullet: true,
		}, [{
			shape: Box(16, 24, Vec2(0, 0), 0),
			density: 1,
		}]),

	)
}
export default Cow