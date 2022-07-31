const indexToCoord = (index: number, columns: number, width: number, height?: number) => {
	height = height ?? width
	return [index % columns * width, Math.floor(index / columns) * height]
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export {
	indexToCoord,
	sleep
}