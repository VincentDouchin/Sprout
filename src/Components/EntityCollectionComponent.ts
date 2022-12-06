import { Component, ECS, Entity } from "../ECS"
class EntityCollectionComponent extends Component {
	#entitiesIds: string[] = []
	parentId: string
	constructor(...entities: Entity[]) {
		super()
		entities.forEach(entity => {
			this.#entitiesIds.push(entity.id)
		})
	}
	get entities() {
		return this.#entitiesIds.map((id) => ECS.getEntityById(id))
	}
	addEntities(...entities: Entity[]) {
		entities.forEach((entity) => {
			this.#entitiesIds.push(entity.id)
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