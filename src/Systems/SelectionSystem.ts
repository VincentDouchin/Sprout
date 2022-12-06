import { Component, Entity, System, ECS } from "../ECS";
import SelectorComponent from "../Components/SelectorComponent";
import PositionComponent from "../Components/PositionComponent";
import AnimationComponent from "../Components/AnimationComponent";
const SelectionSystem = new System(
	SelectorComponent,
	(entity: Entity, selector) => {
		const position = entity.getComponent(PositionComponent)
		const [parentPosition, parentAnimation] = ECS.getEntityById(selector.parentId).getComponents(PositionComponent, AnimationComponent)
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
export default SelectionSystem