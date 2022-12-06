import BodyComponent from '../Components/BodyComponent'
import PositionComponent from '../Components/PositionComponent'
import SpriteComponent from '../Components/SpriteComponent'
import { Box, Vec2 } from 'planck'
import { Component, Entity } from '../ECS'
import InteractableComponent from '../Components/InteractableComponent'
import AnimationComponent from '../Components/AnimationComponent'
import AssetManager from '../AssetManager'
import TeleporterComponent from '../Components/TeleporterComponent'
const TeleportEntity = (options: any) => {

	const newX = options.x
	const newY = options.y
	const entity = new Entity(
		new PositionComponent(newX, newY),
		new BodyComponent({
			type: 'static',
		}, [{
			shape: Box(options.width / 2, options.height / 2, Vec2(0, 0), 0),
			density: 0,
			isSensor: true,
		}]),
		new InteractableComponent('teleport'),
		new TeleporterComponent(options.to.split('.')[0], options.name)
	)
	if (options.door) {
		entity.addComponent(new SpriteComponent(AssetManager.fromString('door animation sprites'), { width: 16, height: 16, renderOrder: 1 }))
		entity.addComponent(new AnimationComponent({

			tileSize: 16,
			animations: ['smallDoor'],
			animationsLength: { smallDoor: 6 },
			state: 'smallDoor',
			backwards: true,
			startAnimation: false,
			verticalTilesNb: 2,
			horizontalTilesNb: 18

		}))
	}

	return entity
}
export default TeleportEntity