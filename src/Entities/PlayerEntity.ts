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
import ItemEntity from "./ItemEntity";
import ShadowComponent from "../Components/ShadowComponent";
import InventoryComponent from "../Components/InventoryComponent";
import DirectionComponent from "../Components/DirectionComponent";

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
		new DirectionComponent(),
		new PositionComponent(x, y),
		new ControllerComponent(true),
		new BodyComponent({
			type: 'dynamic',
			fixedRotation: true,
			bullet: true,
			allowSleep: false

		}, [{
			shape: Box(8, 8, Vec2(0, 0), 0),
			density: 0,
			userData: { type: 'player' },
		},
		{
			shape: Box(1, 1, Vec2(-16, 0), 0),
			density: 0,
			isSensor: true,
			userData: { type: 'playerSensor' },
		}]),
		new CameraTargetComponent(),
		new TeleportableComponent(),
		new InteractableComponent('player'),
		new ShadowComponent(12, 5, 8),


	)
	const inventory = new InventoryComponent(true)
	inventory.add(ItemEntity('vegetable', 'carrot', { amount: 4 }))
	inventory.add(ItemEntity('vegetable', 'tomato', { amount: 4 }))
	inventory.add(ItemEntity('vegetable', 'eggplant', { amount: 4 }))
	inventory.add(ItemEntity('vegetable', 'carrot', { amount: 4 }))
	entity.addComponent(inventory)
	// entity.addComponent(
	// 	new EntityCollectionComponent(
	// 		SelectorEntity(entity.id),

	// 	)
	// )
}

export default PlayerEntity