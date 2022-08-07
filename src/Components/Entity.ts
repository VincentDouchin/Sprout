
import Body from "./Body"
import Sprite from "./Sprite"

interface entity {
	sprite?: Sprite
	body?: planck.Body
	fixture?: planck.Fixture
	fixtures?: planck.Fixture[]
}

const Entity = {
	create({ sprite: _sprite, body: _body, fixture: _fixture, fixtures: _fixtures, position }: { sprite?, body?, fixture?, fixtures?, position: position }): entity {
		const entity: any = {}
		if (_sprite) {
			entity.sprite = Sprite.create(_sprite)
			entity.sprite.mesh.renderOrder = 1
		}
		if (_body) {
			entity.body = Body.create(_body)
		}
		if (_fixture) {
			entity.body.createFixture(_fixture)
		}
		if (_fixtures) {
			entity.fixtures = []
			for (let fixt of _fixtures) {
				entity.fixtures.push(entity.body.createFixture(fixt))
			}
		}
		Entity.setPosition(entity, position)
		return entity
	},
	destroy(entity: entity) {
		if (entity?.sprite) Sprite.destroy(entity.sprite)
		if (entity?.body) Body.destroy(entity.body)
	},
	setPosition(entity: entity, position: position) {
		if (entity?.sprite) Sprite.setPosition(entity.sprite, position)
		if (entity?.body) Body.setPosition(entity.body, position)

	},
	update(entity: entity) {
		if (entity?.sprite) Sprite.update(entity.sprite)
	}
}
export default Entity