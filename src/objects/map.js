import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import getPlane from "./plane";

const indexToCoord = (index, columns, width, height) => {
	height = height ?? width
	return [index % columns * width, Math.floor(index / columns) * height]
}

const getMap = (name) => {
	const map = AssetManager.levels[name]
	const buffer = Buffer(map.width * map.tilewidth, map.height * map.tileheight)
	map.layers.filter(x => x.type == 'tilelayer').forEach(layer => {
		layer.chunks.forEach(chunk => {
			chunk.data.forEach((tile, tileIndex) => {
				if (tile == 0) return
				const tileset = map.tilesets.find(tileset => tileset.firstgid <= tile && tile <= tileset.firstgid + tileset.tilecount - 1)
				const [sx, sy] = indexToCoord(tile - tileset.firstgid, tileset.columns, tileset.tilewidth, tileset.tileheight)
				const [dx, dy] = indexToCoord(tileIndex, chunk.width, map.tilewidth, map.tileheight)
				buffer.drawImage(tileset.img,
					sx, sy, map.tilewidth, map.tileheight,
					dx + chunk.x * map.tilewidth, dy + chunk.y * map.tileheight, tileset.tilewidth, tileset.tileheight
				)
			})
		})

	})
	// document.body.appendChild(buffer.canvas)
	return getPlane(buffer)
}
export default getMap