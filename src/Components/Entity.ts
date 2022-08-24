
import Body from "./Body"
import Sprite from "./Sprite"
import { generateUUID } from "three/src/math/MathUtils"


const Entity = {
	entities: [],
	getEntityById(id: string) {
		return Entity.entities.find(entity => entity.id == id)
	},
	create({ sprite: _sprite, body: _body, fixture: _fixture, fixtures: _fixtures, position, data, type }:
		{ type: string, sprite?, body?, fixture?, fixtures?, position: position, data?: any }): Entity {

		const id = generateUUID()
		const entity: any = { id, data, type, position }
		if (_sprite) {
			entity.sprite = Sprite.create(_sprite)
			entity.sprite.mesh.renderOrder = 1
		}
		if (_body) {
			entity.body = Body.create(_body)
			entity.body.setUserData({ id })
		}
		if (_fixture) {
			const fixture = entity.body.createFixture(_fixture)
			fixture.setUserData({ id })
		}
		if (_fixtures) {
			entity.fixtures = []
			for (let fixt of _fixtures) {
				const fixture = entity.body.createFixture(fixt)
				fixture.setUserData({ id })
				entity.fixtures.push(fixture)
			}
		}
		Entity.setPosition(entity, position)
		Entity.entities.push(entity)
		return entity
	},
	destroy(entity: Entity) {
		if (entity?.sprite) Sprite.destroy(entity.sprite)
		if (entity?.body) Body.destroy(entity.body)
	},
	setPosition(entity: Entity, position: position) {
		if (entity?.sprite) Sprite.setPosition(entity.sprite, position)
		if (entity?.body) Body.setPosition(entity.body, position)

	},
	assignData(entity: Entity, data: any) {
		Object.assign(entity.data, data)
	},
	update(entity: Entity) {
		if (entity?.sprite) Sprite.update(entity.sprite)
	}
}
export default Entity