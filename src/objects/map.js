import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";
import getPlane from "./plane";

const indexToCoord = (index, columns, width, height) => {
	height = height ?? width
	return [index % columns * width, Math.floor(index / columns) * height]
}
const assignObjectProps = tileObject => tileObject.properties?.reduce((acc, v) => ({ ...acc, [v.name]: v.value }), {}) ?? {}
const getMap = (name) => {
	const map = AssetManager.levels[name]
	const collisions = []
	const getMapBuffer = () => Buffer(map.width * map.tilewidth, map.height * map.tileheight)
	const bufferBottom = getMapBuffer()
	const bufferTop = getMapBuffer()

	map.layers.filter(x => x.type == 'tilelayer').forEach(layer => {
		const selectedBuffer = layer.offsetx == 0 ? bufferTop : bufferBottom

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
							y: dyCorrected + tileObject.y + tileObject.height / 2,
							properties: assignObjectProps(tileObject)
						})
					})
				}
				selectedBuffer.drawImage(tileset.img,
					sx, sy, map.tilewidth, map.tileheight,
					dxCorrected, dyCorrected, tileset.tilewidth, tileset.tileheight
				)
			})
		})

	})
	const teleports = map.layers.find(x => x.name == 'teleports').objects.map(object => ({
		...object,
		...AssetManager.templates.teleport.default.object,
		properties: { ...assignObjectProps(object), type: 'teleport' }
	}))


	// document.body.appendChild(buffer.canvas)
	return { meshTop: getPlane({ buffer: bufferTop }), meshBottom: getPlane({ buffer: bufferBottom }), collisions, teleports }
}
export default getMap