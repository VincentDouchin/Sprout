import * as THREE from 'three'
import { Raycaster, Vector2 } from 'three'
import { renderer } from './Initialize'
import Camera from './utils/Camera'

const UIManager = (function () {
	//! Camera
	const UICamera = Camera(200)
	UICamera.position.set(0, 0, 200)
	//! Scene
	const UIScene = new THREE.Scene()
	const modules = []
	const addModule = (module: UIModule) => {
		modules.push(module)
		UIScene.add(module.mesh)

		const [width, height] = ['width', 'height'].map((dimension: string) => Math.max(...module.mesh.children.map((childen: any) => childen['geometry']['parameters'][dimension])))
		switch (module.position) {
			case 'bottom': module.mesh.position.y = UICamera.bottom + height / 2
		}
	}
	window.addEventListener("pointerdown", e => {
		const raycaster = new Raycaster()
		var mouse = new Vector2()
		mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
		raycaster.setFromCamera(mouse, UICamera);
		var intersects = raycaster.intersectObjects(modules.map(x => x.mesh), true); //array
		if (intersects.length > 0) {
			modules.forEach(module => module.click(intersects))
		}
	})

	const render = () => renderer.render(UIScene, UICamera)
	return { addModule, render }


}())
export default UIManager