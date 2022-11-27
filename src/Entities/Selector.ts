import { Box, Vec2 } from "planck";
import { Component, ECS, Entity } from "../ECS";
import Body from "../Components/Body";
import Position from "../Components/Position";
import Buffer from "../utils/Buffer";
import Sprite from '../Components/Sprite'
import Interactable from "../Components/Interactable";
import Animation from "../Components/Animation";
import SelectorComponent from "../Components/SelectorComponent";

const Selector = (parentId: string) => {
	const buffer = Buffer(4, 4)
	buffer.fillStyle = 'red'
	buffer.fillRect(0, 0, 4, 4)
	const [parentPosition] = ECS.getEntityById(parentId).getComponents(Position, Animation)

	const body = new Body({

		type: 'dynamic',
		fixedRotation: true,
		allowSleep: false
	}, [{
		shape: Box(1, 1, Vec2(0, 0), 0),
		density: 0,
		isSensor: true,

	}])
	body.sensor = true

	return new Entity(
		body,
		new Interactable('playerSensor'),
		new Position(parentPosition.x, parentPosition.y),
		new SelectorComponent(parentId, 16),
		// new Image(buffer, { renderOrder: 3 })
	)


}
export default Selector