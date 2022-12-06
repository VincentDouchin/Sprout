import { Entity } from "../ECS";
import { Box, Vec2 } from 'planck'
import PositionComponent from "../Components/PositionComponent";
import ControllerComponent from "../Components/ControllerComponent";
import BodyComponent from "../Components/BodyComponent";
import CameraTargetComponent from '../Components/CameraTargetComponent'
import TeleportableComponent from "../Components/TeleportableComponent";
import InteractableComponent from "../Components/InteractableComponent";
import SpriteComponent from "../Components/SpriteComponent";
import AnimationComponent from "../Components/AnimationComponent";
import AssetManager from "../AssetManager";
import EntityCollectionComponent from "../Components/EntityCollectionComponent";

import Inventory from "./Inventory";
import ItemEntity from "./ItemEntity";
import SelectorEntity from "./SelectorEntity";
import ShadowComponent from "../Components/ShadowComponent";

const PlayerEntity = (name: string, x: number, y: number) => {
	const entity = new Entity(
		new SpriteComponent(AssetManager.fromString(`${name} - Premium Charakter Spritesheet`), { width: 48, height: 48, renderOrder: 2 }),
		new AnimationComponent({
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

		new PositionComponent(x, y),
		new ControllerComponent(true),
		new BodyComponent({
			type: 'dynamic',
			fixedRotation: true,
			bullet: true,
		}, [{
			shape: Box(7, 8, Vec2(0, 0), 0),
			density: 1,
		}]),
		new CameraTargetComponent(),
		new TeleportableComponent(),
		new InteractableComponent('player'),
		new ShadowComponent(12, 5, 8)


	)
	entity.addComponent(
		new EntityCollectionComponent(
			SelectorEntity(entity.id),
			Inventory()
		)
	)
}

export default PlayerEntity