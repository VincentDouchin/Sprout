import { Box, Vec2 } from "planck"
import Body from "../Components/Body"
import Sprite from "../Components/Sprite"

import { assignObjectProps } from '../utils/Functions'
import Character from "./Character"
import Level from "./Level"

const Teleport = {
	create(_teleport) {

		const teleport: any = { data: _teleport }
		const newX = _teleport.x + _teleport.width / 2
		const newY = _teleport.y - _teleport.height / 2


		const position = Vec2(newX, newY)
		teleport.body = Body.create({ position: position, type: 'static', })
		teleport.body.createFixture({
			shape: Box(_teleport.width / 2, _teleport.height / 2, Vec2(0, 0), 0),
			density: 0,
			isSensor: true,
			userData: _teleport
		})

		if (_teleport.door) {
			teleport.sprite = Sprite.create({
				img: 'door animation sprites',
				tileSize: 16,
				animations: ['smallDoor'],
				animationsLength: { smallDoor: 6 },
				repeat: false,
				backwards: true,
				once: true,
				autoStart: false
			})
			teleport.sprite.mesh.position.x = newX
			teleport.sprite.mesh.position.y = newY
		}
		return teleport
	},
	destroy(teleport) {
		if (teleport.sprite) Sprite.destroy(teleport.sprite)
		Body.destroy(teleport.body)
	},


}
export default Teleport