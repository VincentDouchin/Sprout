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
import Entity from '../Components/Entity'
import Plant from '../objects/Plant'
const Run = () => {

	//! Lights
	const light = new AmbientLight(0xffffff)
	scene.add(light)
	// light.position.set(0, 0, 200)

	//! Objects
	let map = Level.create('map')
	const player = Player.create({ name: 'Amélie', position: Vec2(1200, -170), moveForce: 0.5 })


	//! UI
	const inventory = Inventory(player.data)

	UIManager.addModule(inventory)


	const clock = new Clock()
	const controller = Controller(keys)
	let lastTeleport = null
	let lastInteraction = null

	//! Contacts
	const beginContacts = new Map()
	beginContacts.set(['player', 'teleport'], (c: any) => {
		if (player.data.canTeleport) {
			lastTeleport = c.teleport
		}
	})
	beginContacts.set(['player', 'plant'], (c: any) => {
		lastInteraction = c.plant
	})

	const endContacts = new Map()

	endContacts.set(['teleport', 'player'], (c: any) => {
		player.data.canTeleport = true
	})
	endContacts.set(['player', 'plant'], (c: any) => {
		if (lastInteraction && c.plant.id === lastInteraction.id) {
			lastInteraction = null
		}
	})

	const evaluateContact = (contactType: 'begin-contact' | 'end-contact' | 'remove-fixture', contactMap: any) => {
		// @ts-ignore there is a problem in the type definition of the world event listeners?
		world.on(contactType, (c: planck.Contact) => {
			contactMap.forEach((val: Function, key: string[]) => {
				const fixturesData = ['A', 'B'].map(letter => c['getFixture' + letter]().getUserData())
				if (fixturesData.every(data => data?.id && key.includes(Entity.getEntityById(data.id)?.type))) {
					val(fixturesData.reduce((acc, v) => {
						const entity = Entity.getEntityById(v.id)
						return { ...acc, [entity.type]: entity }
					}, {}))
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
			if (controller.interact.once && lastInteraction) {
				switch (lastInteraction.type) {
					case 'plant': {

						Plant.interact(lastInteraction)
					}
						break
				}
			}
			if (lastTeleport && player.data.canTeleport) {
				player.data.stopped = true
				const teleportPlayer = () => {
					Level.unLoad(map)
					const from = lastTeleport.data.from.split('.').at(-2)
					map = Level.create(from)
					const newTeleport = Level.getTeleport(map, lastTeleport.data.name)

					Character.teleport(player, newTeleport.body.getPosition())
					player.data.canTeleport = false

					player.data.stopped = false
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