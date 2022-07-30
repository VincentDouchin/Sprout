import './style.css'

import * as THREE from 'three'
import getMap from './src/objects/map'
import Character from './src/objects/character'
import Controller from './src/Controller'
import keys from './src/keys'
import Engine from './src/Engine'
import * as planck from 'planck';
import { world, scene, render, camera } from './src/Initialize'

const engine = Engine()

//! Lights
const light = new THREE.AmbientLight(0xffffff)
scene.add(light)
light.position.set(0, 0, 200)


//! Objects
let map = getMap('map')



const character = await Character('Amélie')

scene.add(character.mesh)

//! Physics

// character.body.setPosition(teleports[0].getBody().getPosition())

const clock = new THREE.Clock()
const controller = Controller(keys)
const lastTeleport = null
const run = {
	update() {
		world.step(clock.getDelta() * 1000)

		world.on('begin-contact', contact => {

			const contactData: any[] = [contact.getFixtureA(), contact.getFixtureB()].map(fixture => fixture.getUserData())
			const teleport: teleport = contactData.find(x => x?.type == 'teleport')
			if (teleport) {
				if (map.loaded) map.unLoad()
				const from: string | null = teleport?.from?.split('.').at(-2)
				map = getMap(from)
			}

		})
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



	},
	render() {
		render()

	},
	set() {

	}
}
engine.setStates({ run })
engine.setState('run')
engine.start()


