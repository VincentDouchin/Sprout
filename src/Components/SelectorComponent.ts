import { Component, ECS } from '../ECS'
class SelectorComponent extends Component {
	parentId: string
	offset = 16
	constructor(parentId: string, offset?: number) {
		super()
		this.parentId = parentId
		this.offset = offset
	}
	getParent() {
		return ECS.getEntityById(this.parentId)
	}
}
export default SelectorComponent