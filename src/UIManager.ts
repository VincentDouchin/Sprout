import * as THREE from 'three'
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


	const render = () => renderer.render(UIScene, UICamera)
	return { addModule, render }


}())
export default UIManager