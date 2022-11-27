import { Entity } from '../ECS'
import EntityCollection from '../Components/EntityCollection'
import UIElement from '../Components/UIElement'
import Sprite from '../Components/Sprite'
import Buffer from '../utils/Buffer'
import Frame from '../utils/Frame'
import { MeshBasicMaterial } from 'three'
const Inventory = (...items) => {
	const buffer = Frame(9, 1)


	return new Entity(
		new EntityCollection(
			...items = []
		),
		new UIElement('inventory'),
		new Sprite(buffer, { material: MeshBasicMaterial })
	)
}
export default Inventory