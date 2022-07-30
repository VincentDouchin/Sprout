import { world, scene, render, camera, renderer } from '../Initialize'
import * as THREE from 'three'
import getMap from '../objects/map'
import Character from '../objects/character'
import Controller from '../Controller'
import keys from '../keys'
import * as planck from 'planck';
import Inventory from '../UI modules/Inventory'
import UIManager from '../UIManager'
import { Vec2 } from 'planck'
const Run = () => {
	//! Lights
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light)
	light.position.set(0, 0, 200)

	//! Objects
	let map = getMap('map')
	const NPC = Character('Jack')

	const character = Character('Amélie', Vec2(-50, 0))
	//! UI
	const inventory = Inventory(character)

	UIManager.addModule(inventory)


	const clock = new THREE.Clock()
	const controller = Controller(keys)
	let lastTeleport = null

	const checkContactType = (contactType: string, callback: Function) => (contact: planck.Contact) => {
		const contactData: any[] = [contact.getFixtureA(), contact.getFixtureB()].map(fixture => fixture.getUserData())
		return callback(contactData.find(x => x?.type == contactType))
	}

	return {
		//+ Update
		update() {
			world.step(clock.getDelta() * 1000)

			world.on('begin-contact', checkContactType('teleport', (contact: planck.Contact) => {
				if (character.canTeleport) {
					lastTeleport = contact
				}
			}))
			world.on('end-contact', checkContactType('teleport', () => {
				character.canTeleport = true
			}))


			if (lastTeleport && character.canTeleport) {
				if (map.loaded) map.unLoad()

				const from = lastTeleport?.from?.split('.').at(-2)
				map = getMap(from)
				const newTeleport = map.getTeleport(lastTeleport.name)
				character.move(newTeleport.direction)
				character.teleport(newTeleport.position)
				character.canTeleport = false
				lastTeleport = null

			}
			camera.position.x = character.mesh.position.x
			camera.position.y = character.mesh.position.y
			camera.lookAt(character.mesh.position)




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

			//! Colisions
			character.update()
			NPC.update()


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