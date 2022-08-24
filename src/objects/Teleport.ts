import { Box, Vec2 } from "planck"
import Body from "../Components/Body"
import Entity from "../Components/Entity"
import Sprite from "../Components/Sprite"

import { assignObjectProps } from '../utils/Functions'
import Character from "./Character"
import Level from "./Level"

const Teleport = {
	create(_teleport) {
		const newX = _teleport.x + _teleport.width / 2
		const newY = _teleport.y - _teleport.height / 2
		const position = Vec2(newX, newY)
		const entityOptions = {
			body: { type: 'static', },
			fixture: {
				shape: Box(_teleport.width / 2, _teleport.height / 2, Vec2(0, 0), 0),
				density: 0,
				isSensor: true,
			},
			position,
			data: _teleport,
			type: 'teleport'
		}
		if (_teleport.door) {
			entityOptions['sprite'] = {
				img: 'door animation sprites',
				tileSize: 16,
				animations: ['smallDoor'],
				animationsLength: { smallDoor: 6 },
				repeat: false,
				backwards: true,
				once: true,
				startAnimation: false
			}

		}
		const teleport = Entity.create(entityOptions)
		return teleport
	},
}
export default Teleport