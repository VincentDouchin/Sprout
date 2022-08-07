import { world, scene, render, camera, renderer } from '../Initialize'

import Character from '../objects/Character'
import Controller from '../Controller'
import keys from '../Keys'
import UIManager from '../UIManager'
import { Vec2 } from 'planck'
import { AmbientLight, Clock } from 'three'
import Level from '../objects/Level';
import Inventory from '../UI modules/Inventory'
import Player from '../objects/Player'

const Run = () => {

	//! Lights
	const light = new AmbientLight(0xffffff)
	scene.add(light)
	light.position.set(0, 0, 200)

	//! Objects
	let map = Level.create('map')
	const player = Player.create({ name: 'Amélie', position: Vec2(1200, -170), moveForce: 0.5 })


	//! UI
	const inventory = Inventory(player)

	UIManager.addModule(inventory)


	const clock = new Clock()
	const controller = Controller(keys)
	let lastTeleport = null
	//! Contacts

	const beginContacts = new Map()
	beginContacts.set(['player', 'teleport'], (c: any) => {
		if (player.canTeleport) {
			lastTeleport = Level.getTeleport(map, c.teleport.name)
		}
	})
	beginContacts.set(['playerSensor', 'plant'], (c: any) => {
		console.log('plant')

	})

	const endContacts = new Map()
	// endContacts.set(['playerSensor', 'plant'], c => {
	// 	console.log('plant leave')
	// })
	endContacts.set(['teleport', 'player'], (c: any) => {
		player.canTeleport = true
	})

	const evaluateContact = (contactType: 'begin-contact' | 'end-contact' | 'remove-fixture', contactMap: any) => {
		// @ts-ignore there is a problem in the type definition of the world event listeners?
		world.on(contactType, (c: planck.Contact) => {
			contactMap.forEach((val: Function, key: string[]) => {
				const fixturesData = ['A', 'B'].map(letter => c['getFixture' + letter]().getUserData())

				if (fixturesData.every(data => data && key.includes(data.type))) {
					val(fixturesData.reduce((acc, v) => ({ ...acc, [v.type]: v }), {}))
				}
			})
		})
	}
	evaluateContact('begin-contact', beginContacts)
	evaluateContact('end-contact', endContacts)

	return {
		//+ Update
		update() {
			Level.update(map)

			if (lastTeleport && player.canTeleport) {
				const teleportPlayer = () => {
					player.stopped = true
					Level.unLoad(map)
					const from = lastTeleport.data.from.split('.').at(-2)
					map = Level.create(from)
					const newTeleport = Level.getTeleport(map, lastTeleport.data.name)

					Character.teleport(player, newTeleport.body.getPosition())
					player.canTeleport = false

					player.stopped = false
					lastTeleport = null
				}
				if (lastTeleport.sprite) {
					lastTeleport.sprite.onAnimationFinished = teleportPlayer
					lastTeleport.sprite.startAnimation = true
				} else {
					teleportPlayer()
				}


			}






			if (controller.left.active) {
				Character.move(player, 'left')
			}
			if (controller.right.active) {
				Character.move(player, 'right')
			}
			if (controller.up.active) {
				Character.move(player, 'up')
			}
			if (controller.down.active) {
				Character.move(player, 'down')
			}
			Character.update(player)
			camera.position.x = Character.getPosition(player).x
			camera.position.y = Character.getPosition(player).y

			camera.lookAt(player.sprite.mesh.position)

			world.step(clock.getDelta() * 1000)

		},
		//+ Render
		render() {
			render()
			UIManager.render()

		},
		//+Set
		set() {

		}
	}
}
export default Run