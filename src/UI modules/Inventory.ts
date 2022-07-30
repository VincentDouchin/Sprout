import Frame from "../utils/Frame"
import Items from "../objects/Items"
import { scene } from "../Initialize"
import { Group } from "three"
const Inventory = (character: any) => {
	const frame = Frame(9, 1)
	frame.renderOrder = 0
	const group = new Group()
	group.add(frame)
	for (let i = 0; i < character.items.length; i++) {
		const itemMesh = Items.getItem(character.items[i]).mesh
		itemMesh.position.x = (i - 9) / 2 * 16 + 8 * (i + 1)
		group.add(itemMesh.clone())
	}


	return { mesh: group, name: 'inventory', position: 'bottom', }
}
export default Inventory