import { Component, Entity } from "../ECS"
class EntityCollection extends Component {
	entities: Entity[] = []
	parentId: string
	constructor(...entities: Entity[]) {
		super()
		entities.forEach(entity => {
			this.entities.push(entity)
		})
	}
	destroy() {
		this.entities.forEach(entity => entity.destroy())
	}

}
export default EntityCollection