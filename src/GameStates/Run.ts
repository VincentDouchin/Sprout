import { world, scene, render, camera, renderer } from '../Initialize'

import Character from '../objects/Character'
import Controller from '../Controller'
import keys from '../Keys'
import * as planck from 'planck';
import UIManager from '../UIManager'
import { Vec2 } from 'planck'
import { AmbientLight, Clock } from 'three'
import Level from '../objects/Level';
import teleport from '../objects/Teleport';
import Teleport from '../objects/Teleport';

const Run = () => {

	//! Lights
	const light = new AmbientLight(0xffffff)
	scene.add(light)
	light.position.set(0, 0, 200)

	//! Objects
	let map = Level.create('map')
	// const jack = NPC({ name: 'Jack', position: Vec2(-150, -50) })

	const player = Character.create({ name: 'Amélie', position: Vec2(930, -700), moveForce: 0.5 })

	// const character = Character({ name: 'Amélie', position: Vec2(0, -50) })
	//! UI
	// const inventory = Inventory(character)

	// UIManager.addModule(inventory)


	const clock = new Clock()
	const controller = Controller(keys)
	let lastTeleport = null
	// sleep(6000).then(() => door.start())
	//! Contacts

	const beginContacts = new Map()
	beginContacts.set(['player', 'teleport'], (c: any) => {
		if (player.canTeleport) {
			lastTeleport = c.teleport
		}
	})
	beginContacts.set(['playerSensor', 'NPC'], (c: any) => {
		if (controller.interact.active) {
			console.log('hello!')
		}
	})
	const endContact = new Map()
	endContact.set(['teleport', 'player'], (c: any) => {
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
	evaluateContact('end-contact', endContact)

	return {
		//+ Update
		update() {

			// character.sprite.update()
			// map.update()

			if (lastTeleport && player.canTeleport) {
				// Teleport.teleportPlayer(lastTeleport, map, player)
				Level.unLoad(map)
				const from = lastTeleport?.from?.split('.').at(-2)
				map = Level.create(from)
				const newTeleport = Level.getTeleport(map, lastTeleport.name)
				console.log(newTeleport)
				// Character.move(player, newTeleport.data.direction)
				Character.teleport(player, newTeleport.body.getPosition())
				player.canTeleport = false
				lastTeleport = null
				player.stopped = false

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
			// debugger
			camera.lookAt(player.sprite.mesh.position)
			// character.update()
			// jack.update()
			world.step(clock.getDelta() * 1000)

		},
		//+ Render
		render() {
			render()
			// renderer.autoClear = false
			// UIManager.render()
			// renderer.autoClear = true

		},
		//+Set
		set() {

		}
	}
}
export default Run