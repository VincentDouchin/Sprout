import AssetManager from "../AssetManager"

import { Entity } from "../ECS"

import Buffer from "../utils/Buffer"
import { indexToCoord } from '../utils/Functions'

import Sprite from "../Components/Sprite"
import { MeshBasicMaterial } from "three"
import Pickable from "../Components/Pickable"
const Item = (category: string, type: string) => {

	const itemSet: any = Object.values(AssetManager.items).find(itemSet => itemSet['tiles'].some(tile => tile.type == type && tile.category == category))
	const tile = itemSet['tiles'].find(tile => tile.type == type && tile.category == category)
	const buffer = Buffer(itemSet.tilewidth, itemSet.tileheight)
	const [x, y] = indexToCoord(tile.id, itemSet.columns, itemSet.tilewidth, itemSet.tileheight)

	buffer.drawImage(itemSet.img, x, y, 16, 16, 0, 0, 16, 16)

	return new Entity(
		new Sprite(buffer, { material: MeshBasicMaterial, renderOrder: 5 }),
		new Pickable()
	)
}
export default Item