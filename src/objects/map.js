import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";

const indexToCoord = (index, columns, width, height) => {
	height = height ?? width
	return [index % columns * width, Math.floor(index / columns) * height]
}

const getMap = async (name) => {
	const map = AssetManager.levels[name]
	const buffer = Buffer(map.width * map.tilewidth, map.height * map.tileheight)
	map.layers.filter(x => x.type == 'tilelayer').forEach(layer => {
		layer.chunks.forEach(chunk => {
			if (chunk.x != 0 && chunk.y != 0) return
			chunk.data.forEach(tileIndex => {
				if (tileIndex == 0) return
				const tileset = map.tilesets.find(tileset => tileset.firstgid <= tileIndex && tileset.firstgid + tileset.tilecount >= tileIndex)
				const [x, y] = indexToCoord(tileIndex, tileset.columns, tileset.tilewidth, tileset.tileheight)
				buffer.drawImage(tileset.img, x, y, tileset.tilewidth, tileset.tileheight)
			})
		})

	})
	document.body.appendChild(buffer.canvas)
}
export default getMap