import * as planck from 'planck';
import { Scene, Color, WebGLRenderer, Mesh, MeshBasicMaterial, BoxGeometry, Clock } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Camera from './utils/Camera';
import Inputs from './Inputs';
import keys from './Keys';
import { Entity } from './ECS';
import LevelEntity from './Entities/LevelEntity';
//! Camera
const camera: THREE.OrthographicCamera = Camera.create()
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 200)

//! Scene
const scene = new Scene()
scene.background = new Color(0x000000)


//! Renderer
const renderer = new WebGLRenderer({ alpha: true, })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.autoClear = false
document.body.appendChild(renderer.domElement)



//! Resize
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
})
//! Controls

const orbitControls = new OrbitControls(camera, renderer.domElement);
function animate() {
	requestAnimationFrame(animate)
	orbitControls.update()
}
animate()

//! Inputs
const inputs = Inputs(keys)

//! World
const world = new planck.World({ gravity: planck.Vec2(0, 0) })

//! UI
//! Camera
const UICamera = Camera.create(200)
UICamera.position.set(0, 0, 200)
//! Scene
const UIScene = new Scene()

const render = () => {
	renderer.render(scene, camera)
	renderer.render(UIScene, UICamera)
}

const map = new class {
	map: Entity
	load(mapName: string) {
		this.map = LevelEntity(mapName)
	}
	unload() {
		this.map.destroy()
	}
	change(mapName: string) {
		this.unload()
		this.load(mapName)
	}
}
const clock = new Clock()
// const geometry = new BoxGeometry(10, 10, 10);
// const material = new MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new Mesh(geometry, material);
// UIScene.add(cube);
// const geometry2 = new THREE.BoxGeometry(10, 10, 10);
// const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube2 = new THREE.Mesh(geometry, material);
// cube2.position.x = 20
// scene.add(cube2);

// camera.position.z = 5;


export { render, world, scene, camera, renderer, inputs, map, UIScene, UICamera, clock }