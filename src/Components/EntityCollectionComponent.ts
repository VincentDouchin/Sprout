import { Component, ECS, Entity } from "../ECS"
class EntityCollectionComponent extends Component {
	#entitiesIds: string[] = []
	constructor(...entities: Entity[]) {
		super()
		this.addEntities(...entities)
	}
	get entities() {
		return this.#entitiesIds.map((id) => ECS.getEntityById(id))
	}
	addEntities(...entities: Entity[]) {
		entities.forEach((entity) => {
			this.#entitiesIds.push(entity.id)
			entity.parentId = this.parentId
		})
	}
	removeEntity(entity: Entity) {
		this.#entitiesIds = this.#entitiesIds.filter((id) => id != entity.id)
	}
	destroy() {
		this.entities.forEach(entity => entity.destroy())
	}


}
export default EntityCollectionComponent