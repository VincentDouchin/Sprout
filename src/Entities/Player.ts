import { Entity } from "../ECS";
import { Box, Vec2 } from 'planck'
import Sprite from "../Components/Sprite";
import Position from "../Components/Position";
import Controller from "../Components/Controller";
import Body from "../Components/Body";
import CameraTarget from '../Components/CameraTarget'
import Teleportable from "../Components/Teleportable";
import Interactable from "../Components/Interactable";
const Player = (name: string, x: number, y: number) => new Entity(
	new Sprite({
		img: `${name} - Premium Charakter Spritesheet`,
		tileSize: 48,
		animations: ['idle-down', 'idle-up', 'idle-left', 'idle-right', 'moving-down', 'moving-up', 'moving-right', 'moving-left'],
		renderOrder: 1,
		character: true
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
	new Interactable('player')
)

export default Player