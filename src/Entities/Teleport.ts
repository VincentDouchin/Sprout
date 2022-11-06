import Body from '../Components/Body'
import Position from '../Components/Position'
import Sprite from '../Components/Sprite'
import { Box, Vec2 } from 'planck'
import { Component, Entity } from '../ECS'
import Interactable from '../Components/Interactable'
import Data from '../Components/Data'
class Teleporter extends Component {
	canTeleport = true
	to: string
	name: string
	constructor(to: string, name: string) {
		super()
		this.to = to
		this.name = name
	}
	destroy() { }
}
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
		entity.addComponent(new Sprite({
			img: 'door animation sprites',
			tileSize: 16,
			animations: ['smallDoor'],
			state: 'smallDoor',
			animationsLength: { smallDoor: 6 },
			repeat: false,
			backwards: true,
			startAnimation: false,
			renderOrder: 1,

		}))
	}

	return entity
}
export default Teleport