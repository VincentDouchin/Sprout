import { Vec2 } from "planck"
import { world } from "../Initialize"
import { Component, ECS, Entity } from "../ECS"
class Body extends Component {
	body: planck.Body
	fixtures: planck.Fixture[] = []
	velocity = { x: 0, y: 0 }
	moveForce = 0.5
	stopped = false
	idle = false
	initialPosition = true
	sensor = false
	constructor(bodyOptions: any, fixturesOptions: any[] = []) {
		super()
		this.body = world.createBody(bodyOptions)
		fixturesOptions.forEach((fixtureOption: any) => {
			const fixture = this.body.createFixture(fixtureOption)
			this.fixtures.push(fixture)
		})
	}
	setInitialPosition(x: number, y: number) {
		this.body.setPosition(new Vec2(x, y))
		this.initialPosition = false
	}
	getContactList() {
		const contactList = []
		for (let ce: any = this.body.getContactList(); ce; ce = ce.next) {
			const contactId = ce.other.getUserData()?.id
			if (!contactId) break

			const target = ECS.getEntityById(contactId)
			contactList.push(target)

		}
		return contactList
	}
	isColliding(entity: Entity) {
		return this.getContactList().includes(entity.id)
	}
	bind(id: string) {
		this.body.setUserData({ id })
	}
	destroy() {
		world.destroyBody(this.body)
	}

}

// const Body = {
// 	create(options) {
// 		const body = world.createBody(options)
// 		return body
// 	},
// 	destroy(body: planck.Body) {
// 		world.destroyBody(body)
// 	},
// 	setPosition(body, position: position) {
// 		body.setPosition(position)
// 	}

// }
export default Body