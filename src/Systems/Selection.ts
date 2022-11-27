import { Component, Entity, System, ECS } from "../ECS";
import SelectorComponent from "../Components/SelectorComponent";
import Position from "../Components/Position";
import Animation from "../Components/Animation";
const Selection = new System(
	SelectorComponent,
	(entity: Entity, selector) => {
		const position = entity.getComponent(Position)
		const [parentPosition, parentAnimation] = ECS.getEntityById(selector.parentId).getComponents(Position, Animation)
		position.x = parentPosition.x
		position.y = parentPosition.y
		if (parentAnimation.selectedDirection == 'up') {
			position.y += selector.offset
		}
		if (parentAnimation.selectedDirection == 'down') {
			position.y -= selector.offset
		}
		if (parentAnimation.selectedDirection == 'right') {
			position.x += selector.offset
		}
		if (parentAnimation.selectedDirection == 'left') {
			position.x -= selector.offset
		}
	}
)
export default Selection