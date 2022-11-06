import { world, scene, render, camera, renderer, map } from '../Initialize'
import Light from '../Components/Light'
import { ECS } from '../ECS'
import Animations from '../Systems/Animations'
import Movement from '../Systems/Movement'
// import Interactions from '../Systems/Interactions'
import { Clock } from 'three'
// import Character from '../objects/Character'
// import Controller from '../Controller'
// import keys from '../Keys'
// import UIManager from '../UIManager'
// import { Vec2 } from 'planck'
import Level from '../Entities/Level';
// import Inventory from '../UI modules/Inventory'
// import Player from '../objects/Player'
// import Entity from '../Components/Entity'
// import Plant from '../objects/Plant'
// import Teleport from '../objects/Teleport'
// import Contacts from '../utils/Contacts'
// import Sprite from '../Components/Sprite'

import Player from "../Entities/Player"
import { Entity } from '../ECS'
import Teleport from '../Systems/Teleport'

// import Camera from '../utils/Camera'
const Run = () => {
	ECS.registerSystem(Animations)
	ECS.registerSystem(Movement)
	ECS.registerSystem(Teleport)
	// ECS.registerSystem(Interactions)
	const player = Player('Amélie', 1200, -340)
	// //! Lights
	const light = new Entity(new Light())

	// //! Objects
	map.load('map')
	// const player = Player.create({ name: 'Amélie', position: Vec2(1200, -170), moveForce: 0.5 })


	// //! UI
	// const inventory = Inventory(player.data)

	// UIManager.addModule(inventory)


	const clock = new Clock()
	// const controller = Controller(keys)

	// //! Contacts

	// Contacts.evaluateContacts(player, {
	// 	plant(plant: Entity) {
	// 		controller.interact.once && Plant.interact(plant)
	// 	},
	// 	teleport(teleport: Entity) {
	// 		if (this.data.canTeleport) {
	// 			player.data.stopped = true

	// 			const teleportPlayer = () => {
	// 				Level.unLoad(map)
	// 				const from = teleport.data.from.split('.').at(-2)
	// 				map = Level.create(from)

	// 				const newTeleport = Level.getTeleport(map, teleport.data.name)

	// 				Contacts.evaluateContacts(newTeleport, {
	// 					player(player: Entity) {
	// 						return () => player.data.canTeleport = true
	// 					}
	// 				})
	// 				player.data.canTeleport = false
	// 				player.data.stopped = false
	// 				Character.teleport(player, newTeleport.body.getPosition())

	// 			}
	// 			if (teleport.sprite) {
	// 				Sprite.setOnAnimationFinished(teleport.sprite, teleportPlayer)
	// 				teleport.sprite.startAnimation = true
	// 			} else {
	// 				teleportPlayer()
	// 			}
	// 		}
	// 		// return () => console.log('test')
	// 	}

	// })
	return {
		//+ Update
		update() {
			ECS.update()
			// Contacts.update()
			// if (controller.left.active) {
			// 	Character.move(player, 'left')
			// }
			// if (controller.right.active) {
			// 	Character.move(player, 'right')
			// }
			// if (controller.up.active) {
			// 	Character.move(player, 'up')
			// }
			// if (controller.down.active) {
			// 	Character.move(player, 'down')
			// }


			// Character.update(player)
			// Camera.update(camera, player.sprite.mesh.position)
			world.step(clock.getDelta() * 1000)

		},
		//+ Render
		render() {
			render()


		},
		//+Set
		set() {

		}
	}
}
export default Run