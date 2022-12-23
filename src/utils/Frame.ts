import AssetManager from '../AssetManager'
import Buffer from './Buffer'



const getOffset = (offset: number, dimension: number) => offset === 0 ? 0 : offset === dimension - 1 ? 32 : 16

const Frame = (width: number, height: number): CanvasRenderingContext2D => {
	const containers: HTMLImageElement = AssetManager.images['containers']
	const [newWidth, newHeight] = [width + 2, height + 2]
	const buffer = Buffer(newWidth * 16, newHeight * 16)
	for (let x = 0; x < newWidth; x++) {
		for (let y = 0; y < newHeight; y++) {

			const [offsetX, offsetY] = [[x, newWidth], [y, newHeight]].map(([offset, dimension]) => getOffset(offset, dimension))

			buffer.drawImage(containers, offsetX, offsetY, 16, 16, x * 16, y * 16, 16, 16)

		}
	}

	return buffer
}
export default Frame