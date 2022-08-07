import { world } from "../Initialize"

const Body = {
	create(options) {
		const body = world.createBody(options)

		return body
	},
	destroy(body: planck.Body) {
		world.destroyBody(body)
	},
	setPosition(body, position: position) {
		body.setPosition(position)
	}

}
export default Body