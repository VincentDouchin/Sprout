import * as THREE from 'three'
const getPlane = (buffer) => {

    const canvasTexture = new THREE.CanvasTexture(buffer.canvas)
    const geometry = new THREE.PlaneGeometry(buffer.canvas.width, buffer.canvas.height)
    const material = new THREE.MeshBasicMaterial({ map: canvasTexture })
    const plane = new THREE.Mesh(geometry, material)
    return plane
}

export default getPlane