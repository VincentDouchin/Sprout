import * as THREE from 'three'
const getPlane = (buffer, width = null, height = null) => {

    const canvasTexture = new THREE.CanvasTexture(buffer.canvas)
    const geometry = new THREE.PlaneGeometry(width ?? buffer.canvas.width, height ?? buffer.canvas.height)
    const material = new THREE.MeshBasicMaterial({ map: canvasTexture, transparent: true })
    const plane = new THREE.Mesh(geometry, material)
    return plane
}

export default getPlane