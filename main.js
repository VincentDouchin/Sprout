import './style.css'

import * as THREE from 'three'
import getPlane from './src/objects/plane'
import getMap from './src/objects/map'
(async function () {

  const frustumSize = 500
  const map = await getMap('map')


  //! Camera
  const aspect = window.innerWidth / window.innerHeight
  const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000)
  camera.position.set(- 200, 200, 200);

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

  //! Objects
  const plane = await getPlane()
  scene.add(plane)

  function animate() {

    requestAnimationFrame(animate)

    renderer.render(scene, camera)

  }

  animate()

}())