import Frame from "../utils/Frame"
import Items from "../objects/Items"
import AssetManager from "../AssetManager"
import { Group, MeshBasicMaterial, Raycaster, Vector2 } from "three"
import Buffer from "../utils/buffer"
import getPlane from "../utils/plane"
AssetManager.load('selectors')
const getXPosition = (nb: number): number => (nb - 9) / 2 * 16 + 8 * (nb + 1)
const Inventory = (character: any) => {
	//! Frame
	const frame = Frame(9, 1)
	frame.renderOrder = 1

	//!Group
	const group = new Group()
	group.add(frame)

	//! Selector
	let selectedItem = 0
	const selectorBuffer = Buffer(32, 32)
	selectorBuffer.drawImage(AssetManager.images['selectors'], 0, 0)
	const selectorMesh = getPlane({ buffer: selectorBuffer, material: MeshBasicMaterial })
	selectorMesh.position.x = getXPosition(selectedItem)
	selectorMesh.renderOrder = 2
	group.add(selectorMesh)

	//!Items
	const characterItems = []
	for (let i = 0; i < character.items.length; i++) {
		const itemMesh = Items.getItem(character.items[i]).mesh
		itemMesh.position.x = getXPosition(i)
		const clonedMesh = itemMesh.clone()

		group.add(clonedMesh)
		characterItems.push(clonedMesh)

	}
	//! Click
	const click = (intersects: any[]) => {
		const clickedItem = characterItems.findIndex(item => intersects.some(intersect => intersect.object.uuid == item.uuid))

		if (clickedItem != -1) {
			selectedItem = clickedItem
			selectorMesh.position.x = getXPosition(clickedItem)
		}
		console.log(intersects, clickedItem, selectorMesh.position)
	}





	return { mesh: group, name: 'inventory', position: 'bottom', click }
}
export default Inventory