import * as THREE from 'three'
const getPlane = (buffer, width = null, height = null, normalMap = null) => {

    const canvasTexture = new THREE.CanvasTexture(buffer.canvas)
    canvasTexture.minFilter = THREE.NearestFilter;
    canvasTexture.magFilter = THREE.NearestFilter;
    const geometry = new THREE.PlaneGeometry(width ?? buffer.canvas.width, height ?? buffer.canvas.height)
    const material = new THREE.MeshStandardMaterial({ map: canvasTexture, transparent: true, })
    if (normalMap) material.normalMap = normalMap
    const plane = new THREE.Mesh(geometry, material)
    return plane
}

export default getPlane