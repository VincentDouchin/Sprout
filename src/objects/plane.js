import * as THREE from 'three'
//! Plane
const getPlane = async () => {
    const loadImage = (path) => new Promise((resolve, reject) => {
        const image = new Image()
        image.src = path
        image.onload = () => resolve(image)
        image.onerror = () => reject(image)
    })
    const texture = await loadImage('../assets/images/tilesets/Grass.png')

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', { alpha: true })
    ctx.drawImage(texture, texture.width, texture.height)
    const canvasTexture = new THREE.CanvasTexture(ctx.canvas)
    const geometry = new THREE.PlaneGeometry(500, 500)
    const material = new THREE.MeshBasicMaterial({ map: canvasTexture })
    const plane = new THREE.Mesh(geometry, material)

    plane.position.set(-600, 500,)
    return plane
}

export default getPlane