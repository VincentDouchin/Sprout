import { Box, Vec2 } from "planck";
import { Component, ECS, Entity } from "../ECS";
import BodyComponent from "../Components/BodyComponent";
import PositionComponent from "../Components/PositionComponent";
import Buffer from "../utils/Buffer";
import SpriteComponent from '../Components/SpriteComponent'
import InteractableComponent from "../Components/InteractableComponent";
import AnimationComponent from "../Components/AnimationComponent";
import SelectorComponent from "../Components/SelectorComponent";

const SelectorEntity = (parentId: string) => {
	// const buffer = Buffer(4, 4)
	// buffer.fillStyle = 'red'
	// buffer.fillRect(0, 0, 4, 4)
	const [parentPosition] = ECS.getEntityById(parentId).getComponents(PositionComponent)

	const body = new BodyComponent({

		type: 'dynamic',
		fixedRotation: true,
		allowSleep: false
	}, [{
		shape: Box(1, 1, Vec2(0, 0), 0),
		density: 0,
		isSensor: true,
		userData: { type: 'player' }
	}])
	body.sensor = true

	return new Entity(
		body,
		new InteractableComponent('playerSensor'),
		new PositionComponent(parentPosition.x, parentPosition.y),
		// new SelectorComponent(parentId, /16),
		// new Image(buffer, { renderOrder: 3 })
	)


}
export default SelectorEntity