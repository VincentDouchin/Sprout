import './style.css'

import * as THREE from 'three'
import getMap from './src/objects/map'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Character from './src/objects/character'
import Controller from './src/Controller'
import keys from './src/keys'
import Engine from './src/Engine'
import Matter from 'matter-js'
import { Raycaster, Vector3 } from 'three'
import { isColliding } from './src/utils/collider'
import { collideRect } from './src/utils/collider'
(async function () {
	const engine = Engine()




	//! Camera
	const frustumSize = 400
	const aspect = window.innerWidth / window.innerHeight
	const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000)
	// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 0, 200);
	window.camera = camera
	//! Scene
	const scene = new THREE.Scene()
	scene.background = new THREE.Color(0x000000)
	window.scene = scene


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
	const controller = Controller(keys)
	let orbitControlsEnabled = false
	//! Lights
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light)
	light.position.set(0, 0, 200)


	//! Objects
	const map = getMap('map')
	scene.add(map.meshTop)
	scene.add(map.meshBottom)
	map.meshBottom.renderOrder = 0
	map.meshTop.renderOrder = 2
	const character = await Character('Amélie')

	scene.add(character.mesh)
	// character.mesh.renderOrder = 2
	const collisions = []

	//! Physics
	map.collisions.forEach(({ width, height, x, y }) => {
		// const geometry = new THREE.PlaneGeometry(width, height)
		// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

		// const plane = new THREE.Mesh(geometry, material)

		// // scene.add(plane)
		// plane.renderOrder = -1
		// plane.position.x = x - map.mesh.geometry.parameters.width / 2
		// plane.position.y = map.mesh.geometry.parameters.height / 2 - y
		// plane.position.z = 1
		const newX = x - map.meshBottom.geometry.parameters.width / 2
		const newY = map.meshBottom.geometry.parameters.height / 2 - y
		if (!width) debugger
		collisions.push(Matter.Bodies.rectangle(newX, newY, width || 0.5, height || 0.5, { isStatic: true }))
	})
	const physicsEngine = Matter.Engine.create()
	physicsEngine.gravity.x = 0
	physicsEngine.gravity.y = 0
	// const line = Matter.Bodies.fromVertices(-10, -50, Matter.Vertices.create([{ x: 0, y: 50 }, { x: 0, y: -50 }], Matter.Body))
	Matter.Composite.add(physicsEngine.world, [...collisions, character.collisionBox]);
	// const runner = Matter.Runner.create()
	// Matter.Runner.run(runner, physicsEngine);
	// Matter.World.add(engine.world, collisions);
	// Matter.Runner.run(engine);
	// // Matter.Render.run(render);
	const clock = new THREE.Clock()


	const run = {
		update() {
			Matter.Engine.update(physicsEngine, clock.getDelta() * 1000)

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

			//! Colisions
			// collisions.forEach(obj => {
			// 	if (isColliding(character.mesh, 3, obj, 1)) {
			// 		collideRect(character.mesh, 3, obj, 1, character.velocity)
			// 		obj.material.color = new THREE.Color(0xffffff)
			// 	}

			// })
			character.update()



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