import './style.css'

import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'
import getMap from './src/objects/map'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Character from './src/objects/character'
import Controller from './src/Controller'
import keys from './src/keys'
import Engine from './src/Engine'
import { Raycaster, Vector3 } from 'three'
import { isColliding } from './src/utils/collider'
import { collideRect } from './src/utils/collider'
(async function () {
	const engine = Engine()




	//! Camera
	const frustumSize = 50
	const aspect = window.innerWidth / window.innerHeight
	const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000)
	// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.set(0, 0, 20);
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
	// //! Lights
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light)
	// // const redlight = new THREE.PointLight(0xff0000, 5)
	// // scene.add(redlight)
	// // redlight.position.set(5, 5, -5)
	// // const pointLightHelper = new THREE.PointLightHelper(redlight, 100);
	// // scene.add(pointLightHelper)
	// //! Objects
	const map = getMap('map')
	scene.add(map.meshTop)
	scene.add(map.meshBottom)
	map.meshTop.renderOrder = 2
	map.meshBottom.renderOrder = 0
	window.meshTop = map.meshTop
	window.meshBottom = map.meshBottom
	const character = await Character('Amélie')

	scene.add(character.mesh)

	// character.mesh.renderOrder = 1
	// map.mesh = character.mesh
	// const collisions = []


	// 
	// const clock = new THREE.Clock()




	//! Physics 
	const axesHelper = new THREE.AxesHelper(8);
	scene.add(axesHelper);


	const physicsWorld = new CANNON.World({
		gravity: new CANNON.Vec3(0, 0, 0),
	});
	physicsWorld.defaultContactMaterial.contactEquationStiffness = 1e9
	const solver = new CANNON.GSSolver()
	solver.iterations = 1
	solver.tolerance = 0.1
	physicsWorld.solver = new CANNON.SplitSolver(solver)

	const physicsMaterial = new CANNON.Material('physics')
	const physics_physics = new CANNON.ContactMaterial(physicsMaterial, physicsMaterial, {
		friction: 0.0,
		restitution: 0,
	})
	character.boxBody.material = physicsMaterial
	character.boxBody.linearDamping = 0
	const groundBody = new CANNON.Body({
		type: CANNON.Body.STATIC,
		// infinte geometric plane
		shape: new CANNON.Plane(),
	});
	physicsWorld.addBody(groundBody);
	physicsWorld.addBody(character.boxBody)
	map.collisions.forEach(({ width, height, x, y, properties }) => {
		const boxBody = new CANNON.Body({
			mass: 0,
			shape: new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, 1)),
			material: physicsMaterial
		});
		boxBody.linearDamping = 1
		boxBody.position.set(x - map.meshBottom.geometry.parameters.width / 2, map.meshBottom.geometry.parameters.height / 2 - y, 0)
		physicsWorld.addBody(boxBody)
		// const geometry = new THREE.PlaneGeometry(width, height)
		// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

		// const plane = new THREE.Mesh(geometry, material)
		// plane.userData = properties
		// collisions.push(plane)
		// scene.add(plane)
		// plane.renderOrder = -1
		// plane.position.x = x - map.meshBottom.geometry.parameters.width / 2
		// plane.position.y = map.meshBottom.geometry.parameters.height / 2 - y
		// plane.position.z = 1
	})



	const cannonDebugger = new CannonDebugger(scene, physicsWorld, {
		color: 0xff0000,
	});








	const run = {
		update() {
			physicsWorld.fixedStep();
			cannonDebugger.update();
			// boxMesh.position.copy(boxBody.position);
			// boxMesh.quaternion.copy(boxBody.quaternion);
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

			// //! Colisions
			// // collisions.forEach(obj => {
			// // 	if (isColliding(character.mesh, 3, obj, 1)) {
			// // 		collideRect(character.mesh, 3, obj, 1, character.velocity)
			// // 		obj.material.color = new THREE.Color(0xffffff)
			// // 	}

			// // })
			character.update()



		},
		render() {
			renderer.render(scene, camera)
			cannonDebugger.update();
			physicsWorld.fixedStep();
		},
		set() {

		}
	}
	engine.setStates({ run })
	engine.setState('run')
	engine.start()



}())