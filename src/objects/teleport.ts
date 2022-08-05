import { Box, Vec2 } from "planck"
import body from "../Components/Body"
import sprite from "../Components/Sprite"
import Entity from "../Entity"

const teleport = (_teleport) => {
	const newX = _teleport.x + _teleport.width / 2
	const newY = _teleport.y - _teleport.height / 2

	const entity = new Entity()
	entity.position = Vec2(newX, newY)
	Object.assign(entity, _teleport)
	entity.add(new body(
		{ position: entity.position, type: 'static', },

	)
	if (_teleport.door) {
		entity.add(new sprite({
			img: 'door animation sprites',
			tileSize: 16,
			animations: ['smallDoor'],
			animationsLength: { smallDoor: 6 },
			repeat: false,
			backwards: true,
			once: true,
			autoStart: false
		}))
		entity.sprite.mesh.position.x = newX
		entity.sprite.mesh.position.y = newY
	}

	return entity
}
export default teleport