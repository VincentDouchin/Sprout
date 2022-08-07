
import sprite from "./Components/Sprite"
import { world } from "./Initialize"

// const Entity: any = class {
// 	components = []
// 	fixtures = []

// 	body: planck.Body
// 	sprite: any
// 	get fixture() {
// 		return this.fixtures[0]
// 	}
// 	add(component: any) {
// 		this.components[component.constructor.name] = component
// 		return this
// 	}
// 	addBody(bodyOptions) {
// 		this.body = world.createBody(bodyOptions)
// 		// this.body.setUserData(this)
// 		return this
// 	}
// 	addFixture(fixtureOption) {
// 		const fixture = this.body.createFixture(fixtureOption)
// 		// fixture.setUserData(this)
// 		this.fixtures.push(fixture)
// 		return this
// 	}
// 	addSprite(spriteOptions) {
// 		this.sprite = new sprite(spriteOptions)
// 		// debugger
// 		// this.sprite.mesh.userData = this
// 		return this
// 	}


// }
const Entity = {
	add(entity, component) {
		entity[component.name] = component
	}
}

export default Entity