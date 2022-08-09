import * as THREE from 'three'

const getPlane = (planeImage: planeImage, width?: number, height?: number,) => {
    const { buffer, texture, material = THREE.MeshStandardMaterial } = planeImage
    let text = null

    if (buffer) {
        const canvasTexture = new THREE.CanvasTexture(buffer.canvas)
        canvasTexture.minFilter = THREE.NearestFilter;
        canvasTexture.magFilter = THREE.NearestFilter;
        text = canvasTexture
    } else {
        text = texture
    }

    const geometry = new THREE.PlaneGeometry(width ?? buffer.canvas.width, height ?? buffer.canvas.height)
    const meshMaterial = new material({ map: text, transparent: true, })
    const plane = new THREE.Mesh(geometry, meshMaterial)
    return plane
}

export default getPlane