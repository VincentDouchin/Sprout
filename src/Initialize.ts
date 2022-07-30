import * as planck from 'planck';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//! Camera
const frustumSize = 200
const aspect = window.innerWidth / window.innerHeight
const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000)
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 200)

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
function animate() {
	requestAnimationFrame(animate);
	controls.update();
}
animate()

//! World
const world = new planck.World({ gravity: planck.Vec2(0, 0) })

const render = () => renderer.render(scene, camera)
export { render, world, scene, camera }