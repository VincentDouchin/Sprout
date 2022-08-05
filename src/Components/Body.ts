import { world } from "../Initialize"

const body = class {
	body: planck.Body
	fixture: planck.Fixture
	fixtures: planck.Fixture[]
	constructor(bodyOptions, fixtures) {
		this.body = world.createBody(bodyOptions)
		if (Array.isArray(fixtures)) {
			this.fixtures = fixtures.map(this.body.createFixture)
		} else {
			this.fixture = this.body.createFixture(fixtures)
		}

	}

}
export default body