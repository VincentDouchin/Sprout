import Body from '../Components/Body'
import Position from '../Components/Position'
import Sprite from '../Components/Sprite'
import { Box, Vec2 } from 'planck'
import { Component, Entity } from '../ECS'
import Interactable from '../Components/Interactable'
import Animation from '../Components/Animation'
import AssetManager from '../AssetManager'
import Teleporter from '../Components/Teleporter'
const Teleport = (options: any) => {

	const newX = options.x
	const newY = options.y
	const entity = new Entity(
		new Position(newX, newY),
		new Body({
			type: 'static',
		}, [{
			shape: Box(options.width / 2, options.height / 2, Vec2(0, 0), 0),
			density: 0,
			isSensor: true,
		}]),
		new Interactable('teleport'),
		new Teleporter(options.to.split('.')[0], options.name)
	)
	if (options.door) {
		entity.addComponent(new Sprite(AssetManager.fromString('door animation sprites'), { width: 16, height: 16, renderOrder: 1 }))
		entity.addComponent(new Animation({

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
export default Teleport