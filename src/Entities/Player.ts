import { Entity } from "../ECS";
import { Box, Vec2 } from 'planck'
import Position from "../Components/Position";
import Controller from "../Components/Controller";
import Body from "../Components/Body";
import CameraTarget from '../Components/CameraTarget'
import Teleportable from "../Components/Teleportable";
import Interactable from "../Components/Interactable";
import Sprite from "../Components/Sprite";
import Animation from "../Components/Animation";
import AssetManager from "../AssetManager";
import EntityCollection from "../Components/EntityCollection";

import Inventory from "./Inventory";
import Item from "./Item";
import Selector from "./Selector";
import Shadow from "../Components/Shadow";

const Player = (name: string, x: number, y: number) => {
	const entity = new Entity(
		new Sprite(AssetManager.fromString(`${name} - Premium Charakter Spritesheet`), { width: 48, height: 48, renderOrder: 2 }),
		new Animation({
			verticalTilesNb: 24, horizontalTilesNb: 8,
			tileSize: 48,
			animations: [
				'idle-down', 'idle-up', 'idle-left', 'idle-right',
				'moving-down', 'moving-up', 'moving-right', 'moving-left',
				'running-down', 'running-up', 'running-right', 'running-left',
				'hoe-down', 'hoe-up', 'hoe-right', 'hoe-left',
				'axe-down', 'axe-up', 'axe-right', 'axe-left',
				'watering-down', 'watering-up', 'watering-left', 'watering-right',
			],
			direction: true,
			// character: true
		}),

		new Position(x, y),
		new Controller(true),
		new Body({
			type: 'dynamic',
			fixedRotation: true,
			bullet: true,
		}, [{
			shape: Box(7, 8, Vec2(0, 0), 0),
			density: 1,
		}]),
		new CameraTarget(),
		new Teleportable(),
		new Interactable('player'),
		new Shadow(14, 6, 8)


	)
	entity.addComponent(
		new EntityCollection(
			Selector(entity.id),
			Inventory(
				// Item('seed', 'pumpkin')
			)
		)
	)
}

export default Player