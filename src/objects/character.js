import getPlane from "./plane";
import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import * as CANNON from 'cannon-es'

import { Box3, BoxHelper, Vector3, Mesh, PlaneGeometry, MeshBasicMaterial } from "three";
const friction = 0.9

const Character = async (_name) => {
	name = _name
	const img = await AssetManager.load(`${name ? name + ' - ' : ''}Premium Charakter Spritesheet`)
	const normal = await AssetManager.load('Basic Charakter Spritesheet-normal')
	const tileSize = 48
	const tilesNb = { vertical: img.height / 48, horizontal: img.width / 48 }
	const buffer = Buffer(img.width, img.height)
	const bufferNormal = Buffer(normal.width, normal.height)
	buffer.drawImage(img, 0, 0)
	bufferNormal.drawImage(normal, 0, 0)
	const mesh = getPlane({ buffer }, tileSize, tileSize, bufferNormal)
	let selectedSprite = 0
	let animationCounter = 0
	const spritesNb = 8

	mesh.material.map.repeat.set(1 / tilesNb.horizontal, 1 / tilesNb.vertical)
	mesh.material.map.offset.set(1 / tilesNb.horizontal, 1 / tilesNb.vertical)
	const boxBody = new CANNON.Body({
		mass: 1,
		shape: new CANNON.Box(new CANNON.Vec3(tileSize / 2 / 3, tileSize / 2 / 3, 1)),
	});
	boxBody.position.set(-40, 10, 0)
	boxBody.fixedRotation = true


	const moveForce = 2
	const animations = ['down', 'up', 'left', 'right', ...new Array(20).fill(0)]

	const velocity = { x: 0, y: 0 }
	let direction = 'down'
	window.mesh = mesh

	const move = (_direction) => {
		direction = _direction
		switch (_direction) {
			case 'up': {
				velocity.y += moveForce
			}; break
			case 'down': {
				velocity.y -= moveForce
			}; break
			case 'right': {
				velocity.x += moveForce
			}; break
			case 'left': {
				velocity.x -= moveForce

			}; break
		}

	}
	const collisionBox = new Mesh(new PlaneGeometry(16, 16), new MeshBasicMaterial())
	// const boxhelper = new BoxHelper(collisionBox, 0xffff00);
	// scene.add(boxhelper);

	const update = () => {
		mesh.position.copy(boxBody.position);
		mesh.quaternion.copy(boxBody.quaternion);
		// boxhelper.update()
		animationCounter++
		if (animationCounter > 4) {
			animationCounter = 0
			selectedSprite = (selectedSprite + 1) % spritesNb
		}
		const moving = Math.abs(velocity.x) > 1 || Math.abs(velocity.y) > 1
		const offsetY = 1 - ((animations.findIndex(animation => animation == direction) + 1) / animations.length)
		const offsetX = moving ? selectedSprite / tilesNb.horizontal : 0
		mesh.material.map.offset.set(offsetX, offsetY)
		velocity.x *= friction
		velocity.y *= friction
		boxBody.velocity.set(velocity.x, velocity.y, -1)
		// boxBody.position.set(boxBody.position.x += velocity.x, boxBody.position.y += velocity.y, 0)
		collisionBox.position.set(...mesh.position.toArray())
	}
	return { mesh, boxBody, move, update, velocity, name }
}
export default Character