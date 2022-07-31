import { world, scene, render, camera, renderer } from '../Initialize'
import * as THREE from 'three'
import getMap from '../objects/Map'
import Character from '../objects/Character'
import Controller from '../Controller'
import keys from '../Keys'
import * as planck from 'planck';
import Inventory from '../UI modules/Inventory'
import UIManager from '../UIManager'
import { Vec2 } from 'planck'
import NPC from '../objects/NPC'
import SpriteAnimation from '../utils/SpriteAnimation'
import { sleep } from '../utils/Functions'
const Run = () => {

	//! Lights
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light)
	light.position.set(0, 0, 200)

	//! Objects
	let map = getMap('map')
	const jack = NPC({ name: 'Jack', position: Vec2(-150, -50) })

	const character = Character({ name: 'Amélie', position: Vec2(1300, -300) })
	// const character = Character({ name: 'Amélie', position: Vec2(0, -50) })
	//! UI
	const inventory = Inventory(character)

	UIManager.addModule(inventory)


	const clock = new THREE.Clock()
	const controller = Controller(keys)
	let lastTeleport = null
	// sleep(6000).then(() => door.start())
	//! Contacts

	const beginContacts = new Map()
	beginContacts.set(['player', 'teleport'], (c: any) => {
		if (character.canTeleport) {

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
		character.canTeleport = true
	})

	const evaluateContact = (contactType: 'begin-contact' | 'end-contact' | 'remove-fixture', contactMap: any) => {
		//@ts-ignore there is a problem in the type definition of the world event listeners?
		world.on(contactType, (c: planck.Contact) => {
			contactMap.forEach((val: Function, key: string[]) => {
				const fixturesData = ['A', 'B'].map(letter => c['getFixture' + letter]().getUserData())
				if (fixturesData.every(data => key.includes(data.type))) {
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
			world.step(clock.getDelta() * 1000 * 2)

			map.update()

			if (lastTeleport && character.canTeleport) {
				character.setStop(true)
				lastTeleport.door.setOnAnimationFinished(() => {

					if (map.loaded) map.unLoad()

					const from = lastTeleport?.from?.split('.').at(-2)
					map = getMap(from)
					const newTeleport = map.getTeleport(lastTeleport.name)
					character.move(newTeleport.direction)
					character.teleport(newTeleport.position)
					character.canTeleport = false
					lastTeleport = null
					character.setStop(false)
				})
				lastTeleport.door.start()


			}
			camera.position.x = character.position.x
			camera.position.y = character.position.y
			camera.lookAt(character.position)





			if (controller.left.active) {
				character.move('left')
			}
			if (controller.right.active) {
				character.move('right')
			}
			if (controller.up.active) {
				character.move('up')
			}
			if (controller.down.active) {
				character.move('down')
			}

			character.update()
			jack.update()

		},
		//+ Render
		render() {
			render()
			renderer.autoClear = false
			UIManager.render()
			renderer.autoClear = true

		},
		//+Set
		set() {

		}
	}
}
export default Run