import { Vec2 } from "planck"
import { world } from "../Initialize"
import { Component, ECS, Entity } from "../ECS"
class BodyComponent extends Component {
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
	getContactList(type?: string) {
		const contactList = []
		for (let ce: any = this.body.getContactList(); ce; ce = ce.next) {
			if ([ce.contact.getFixtureB().getUserData(), ce.contact.getFixtureA().getUserData()].some((userData: any) => userData?.type == type)) {

				const contactId = ce.other.getUserData()?.id
				const target = ECS.getEntityById(contactId)
				contactList.push(target)

			}
			// 	if (!contactId) break
			// 	const addToContactList = () => {
			// 	}
			// 	if (type) {
			// 		for (let fixture: any = ce.other.getFixtureList(); fixture; fixture = fixture.getNext()) {
			// 			if (fixture.getUserData()?.type == type) {
			// 				debugger
			// 				addToContactList()
			// 			}
			// 		}
			// 	} else {
			// 		addToContactList()
			// 	}


		}
		return contactList
	}
	isColliding(entity: Entity) {

		// return this.getContactList().includes(entity.id)
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
export default BodyComponent