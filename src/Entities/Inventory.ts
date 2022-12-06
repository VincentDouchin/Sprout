import { Entity } from '../ECS'
import EntityCollectionComponent from '../Components/EntityCollectionComponent'

import SpriteComponent from '../Components/SpriteComponent'
import Buffer from '../utils/Buffer'
import Frame from '../utils/Frame'
import { MeshBasicMaterial } from 'three'
const Inventory = (...items: Entity[]) => {
	const buffer = Frame(9, 1)


	return new Entity(
		new EntityCollectionComponent(
			...items
		),

		new SpriteComponent(buffer, { material: MeshBasicMaterial }),

	)
}
export default Inventory