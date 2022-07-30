import * as planck from 'planck';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Camera from './utils/Camera';

//! Camera
const camera: THREE.Camera = Camera()
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 200)

//! Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)


//! Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true, })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.autoClear = false
document.body.appendChild(renderer.domElement)



//! Resize
window.addEventListener('resize', () => {


	renderer.setSize(window.innerWidth, window.innerHeight);
})
//! Controls

const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
	requestAnimationFrame(animate);
	controls.update();
}
animate()

//! World
const world = new planck.World({ gravity: planck.Vec2(0, 0) })

const render = () => renderer.render(scene, camera)
window['world'] = world



export { render, world, scene, camera, renderer }