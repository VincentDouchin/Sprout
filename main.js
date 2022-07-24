import './style.css'

import * as THREE from 'three'
import getMap from './src/objects/map'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Character from './src/objects/character'
import Controller from './src/Controller'
import keys from './src/keys'
import Engine from './src/Engine'
import { Vector3 } from 'three'
(async function () {
	const engine = Engine()




	//! Camera
	const frustumSize = 400
	const aspect = window.innerWidth / window.innerHeight
	const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000)
	// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 0, 200);

	//! Scene
	const scene = new THREE.Scene()
	scene.background = new THREE.Color(0x000000)



	//! Renderer
	const renderer = new THREE.WebGLRenderer()
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)




	//! Resize
	window.addEventListener('resize', () => {

		const aspect = window.innerWidth / window.innerHeight;

		camera.left = - frustumSize * aspect / 2;
		camera.right = frustumSize * aspect / 2;
		camera.top = frustumSize / 2;
		camera.bottom = - frustumSize / 2;

		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	})
	//! Controls
	const controls = new OrbitControls(camera, renderer.domElement);

	//! Lights
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light)
	light.position.set(0, 0, 200)
	// const redlight = new THREE.PointLight(0xff0000, 5)
	// scene.add(redlight)
	// redlight.position.set(5, 5, -5)
	// const pointLightHelper = new THREE.PointLightHelper(redlight, 100);
	// scene.add(pointLightHelper)
	//! Objects
	const map = getMap('map')
	scene.add(map.mesh)
	const character = await Character()
	scene.add(character.mesh)

	const collisions = []
	map.collisions.forEach(({ width, height, x, y }) => {
		const geometry = new THREE.PlaneGeometry(width, height)
		const material = new THREE.MeshStandardMaterial({ opacity: 0 })

		const plane = new THREE.Mesh(geometry, material)
		collisions.push(new THREE.Box3().setFromObject(plane))
		scene.add(plane)
		plane.position.x = x - map.mesh.geometry.parameters.width / 2
		plane.position.y = map.mesh.geometry.parameters.height / 2 - y
		plane.position.z = 1
	})

	const controller = Controller(keys)
	const clock = new THREE.Clock()

	let orbitControlsEnabled = false
	const run = {
		update() {
			collisions.forEach(collision => {

			})
			if (orbitControlsEnabled) {
				controls.update()
			} else {
				camera.position.x = character.mesh.position.x
				camera.position.y = character.mesh.position.y
				camera.lookAt(character.mesh.position)
			}

			if (controller.switchCamera.once) {
				orbitControlsEnabled = !orbitControlsEnabled
			}
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
			character.update(clock.getElapsedTime())
			//! Colisions

		},
		render() {
			renderer.render(scene, camera)

		},
		set() {

		}
	}
	engine.setStates({ run })
	engine.setState('run')
	engine.start()



}())