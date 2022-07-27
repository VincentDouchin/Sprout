import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import getPlane from "./plane";

const indexToCoord = (index, columns, width, height) => {
	height = height ?? width
	return [index % columns * width, Math.floor(index / columns) * height]
}

const getMap = (name) => {
	const map = AssetManager.levels[name]
	const collisions = []
	const getBuffer = () => Buffer(map.width * map.tilewidth, map.height * map.tileheight)
	const bufferBottom = getBuffer()
	const bufferTop = getBuffer()

	map.layers.filter(x => x.type == 'tilelayer').forEach(layer => {
		const buffer = layer.offsetx === 0 ? bufferTop : bufferBottom
		layer.chunks.forEach(chunk => {

			chunk.data.forEach((tile, tileIndex) => {
				if (tile == 0) return
				const tileset = map.tilesets.find(tileset => tileset.firstgid <= tile && tile <= tileset.firstgid + tileset.tilecount - 1)
				if (!tileset) return

				const [sx, sy] = indexToCoord(tile - tileset.firstgid, tileset.columns, tileset.tilewidth, tileset.tileheight)
				const [dx, dy] = indexToCoord(tileIndex, chunk.width, map.tilewidth, map.tileheight)
				const dxCorrected = dx + chunk.x * map.tilewidth
				const dyCorrected = dy + chunk.y * map.tileheight

				const tileObjects = tileset.tiles?.find(t => t.id == tile - tileset.firstgid)?.objectgroup?.objects
				if (tileObjects) {
					tileObjects.forEach(tileObject => {
						collisions.push({
							width: tileObject.width,
							height: tileObject.height,
							x: dxCorrected + tileObject.x + tileObject.width / 2,
							y: dyCorrected + tileObject.y + tileObject.height / 2
						})
					})
				}
				// if (tileObject) debugger
				selectedBuffer.drawImage(tileset.img,
					sx, sy, map.tilewidth, map.tileheight,
					dxCorrected, dyCorrected, tileset.tilewidth, tileset.tileheight
				)
			})
		})

	})

	const meshTop = getPlane({ buffer: bufferTop })
	const meshBottom = getPlane({ buffer: bufferBottom })
	// document.body.appendChild(buffer.canvas)
	return { meshBottom: getPlane({ buffer: bufferBottom }), meshTop: getPlane({ buffer: bufferTop }), collisions }
}
export default getMap