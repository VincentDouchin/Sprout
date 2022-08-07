import { MeshBasicMaterial } from "three"
import AssetManager from "../AssetManager"
import Buffer from "../utils/Buffer"
import { indexToCoord } from "../utils/Functions"
import getPlane from "../utils/Plane"

const tileset1 = AssetManager.items['items1']
const items = tileset1.tiles.map((tile: any) => {
	const buffer = Buffer(16, 16)
	const [x, y] = indexToCoord(tile.id, tileset1.columns, tileset1.tilewidth, tileset1.tileheight)

	buffer.drawImage(tileset1.img, x, y, 16, 16, 0, 0, 16, 16)

	const mesh = getPlane({ buffer, material: MeshBasicMaterial })
	mesh.renderOrder = 1
	return { ...tile, mesh }
})
const Items = {
	create(obj: any) {
		return items.find((item: any) => Object.entries(obj).every(([key, val]) => item[key] == val))
	}

}

export default Items