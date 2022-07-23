import './style.css'

import * as THREE from 'three'
import getMap from './src/objects/map'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Character from './src/objects/character'
(async function () {

	const frustumSize = 500



	//! Camera
	const aspect = window.innerWidth / window.innerHeight
	const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000)
	camera.position.set(- 200, 200, 200);

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
	// const controls = new OrbitControls(camera, renderer.domElement);


	//! Objects
	const map = getMap('map')
	scene.add(map)
	// const character = await Character()
	// scene.add(character)

	function animate() {
		// controls.update();
		requestAnimationFrame(animate)

		renderer.render(scene, camera)
	}

	animate()

}())