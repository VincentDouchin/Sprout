import * as THREE from 'three'

const getPlane = (planeImage: planeImage, width = null, height = null, normalMap = null) => {
    const { buffer, texture } = planeImage
    let text
    if (buffer) {
        const canvasTexture = new THREE.CanvasTexture(buffer.canvas)
        canvasTexture.minFilter = THREE.NearestFilter;
        canvasTexture.magFilter = THREE.NearestFilter;
        text = canvasTexture
    } else {
        text = texture
    }

    const geometry = new THREE.PlaneGeometry(width ?? buffer.canvas.width, height ?? buffer.canvas.height)
    const material = new THREE.MeshStandardMaterial({ map: text, transparent: true, })
    if (normalMap) material.normalMap = normalMap
    const plane = new THREE.Mesh(geometry, material)
    return plane
}

export default getPlane