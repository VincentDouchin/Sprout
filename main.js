import './style.css'

import * as THREE from 'three'
import getMap from './src/objects/map'
import Character from './src/objects/character'
import Controller from './src/Controller'
import keys from './src/keys'
import Engine from './src/Engine'
import * as planck from 'planck';
import { world, scene, render } from './src/Initialize'

const engine = Engine()

//! Lights
const light = new THREE.AmbientLight(0xffffff)
scene.add(light)
light.position.set(0, 0, 200)


//! Objects
const map = getMap('house1')

scene.add(map.meshTop)
scene.add(map.meshBottom)
map.meshBottom.renderOrder = 0
map.meshTop.renderOrder = 2
const character = await Character('Amélie')
window.planck = planck
scene.add(character.mesh)

//! Physics
const collisionsBody = world.createBody({
	type: 'static',
	position: { x: 0, y: 0 }
})
map.collisions.forEach(({ width, height, x, y }) => {
	const newX = x - map.meshBottom.geometry.parameters.width / 2
	const newY = map.meshBottom.geometry.parameters.height / 2 - y
	collisionsBody.createFixture(planck.Box(width / 2, height / 2, planck.Vec2(newX, newY), 0.0), 0.0);
})

const teleportBody = world.createBody({
	type: 'static',
	position: { x: 0, y: 0 }
})
map.teleports.forEach(({ width, height, x, y, properties },) => {

	const newX = x - map.meshBottom.geometry.parameters.width / 2
	const newY = map.meshBottom.geometry.parameters.height / 2 - y
	const geometry = new THREE.PlaneGeometry(width, height)
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

	const plane = new THREE.Mesh(geometry, material)


	scene.add(plane)
	plane.renderOrder = -1
	plane.position.x = newX
	plane.position.y = newY
	plane.position.z = 1
	const fixture = teleportBody.createFixture(planck.Box(width / 2, height / 2, planck.Vec2(newX, newY), 0), 0)
	fixture.setUserData(properties)
})
const clock = new THREE.Clock()
const controller = Controller(keys)
window.world = world
const run = {
	update() {
		world.step(clock.getDelta() * 1000)

		world.on('begin-contact', contact => {
			if (contact.getFixtureB().getUserData().type == 'teleport') {

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


