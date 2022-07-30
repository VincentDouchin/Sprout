import { OrthographicCamera } from "three"
const Camera = (frustumSize = 200): THREE.OrthographicCamera => {

	const aspect = window.innerWidth / window.innerHeight
	const camera = new OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000)
	window.addEventListener('resize', () => {
		const aspect = window.innerWidth / window.innerHeight;
		camera.left = - frustumSize * aspect / 2
		camera.right = frustumSize * aspect / 2
		camera.top = frustumSize / 2
		camera.bottom = - frustumSize / 2
		camera.updateProjectionMatrix()
	})
	return camera
}
export default Camera