import AssetManager from "../AssetManager"

import { Entity } from "../ECS"

import Buffer from "../utils/Buffer"
import { indexToCoord } from '../utils/Functions'

import SpriteComponent from "../Components/SpriteComponent"
import { MeshBasicMaterial } from "three"
import PickableComponent from "../Components/PickableComponent"
import StackableComponent from "../Components/StackableComponent"
import DataComponent from "../Components/DataComponent"
import ItemComponent from "../Components/ItemComponent"
interface itemOptions {
	amount?: number
}
const ItemEntity = (category: string, type: string, { amount = 1 }: itemOptions = {}) => {

	const itemSet: any = Object.values(AssetManager.items).find(itemSet => itemSet['tiles'].some(tile => tile.type == type && tile.category == category))
	const tile = itemSet['tiles'].find(tile => tile.type == type && tile.category == category)
	const buffer = Buffer(itemSet.tilewidth, itemSet.tileheight)
	const [x, y] = indexToCoord(tile.id, itemSet.columns, itemSet.tilewidth, itemSet.tileheight)

	buffer.drawImage(itemSet.img, x, y, 16, 16, 0, 0, 16, 16)
	const entity = new Entity()
	entity.addComponent(new SpriteComponent(buffer, { renderOrder: 5 }))
	entity.addComponent(new PickableComponent())
	entity.addComponent(new ItemComponent(category, type))
	if (tile.stackable) entity.addComponent(new StackableComponent(amount))
	return entity
}
export default ItemEntity