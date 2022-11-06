

const indexToCoord = (index: number, columns: number, width: number, height?: number) => {
	height = height ?? width
	return [index % columns * width, Math.floor(index / columns) * height]
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const assignObjectProps = (tileObject: any) => tileObject.properties?.reduce((acc: any, v: any) => ({ ...acc, [v.name]: v.value }), {}) ?? {}

const getFileName = path => path.split(/[\/.]/).at(-2)

const waitFor = function* (nb: number) {
	for (let i = 0; i < nb; i++) {
		yield i
	}
	return nb
}

export {
	indexToCoord,
	sleep,
	assignObjectProps,
	getFileName,
	waitFor
}