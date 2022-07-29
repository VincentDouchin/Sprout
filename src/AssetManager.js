

const getFileName = path => path.split(/[\/.]/).at(-2)
const mapToFileName = async (obj, fn = x => x) => (await Promise.all(Object.entries(obj)
    .map(async ([key, val]) => [getFileName(key), await fn(val)])
)).reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})

const loadImage = (path) => new Promise((resolve, reject) => {
    const image = new Image()
    image.src = path
    image.onload = () => resolve(image)
    image.onerror = () => reject(image)
})
const AssetManager = await (async () => {
    const sourceLevels = import.meta.globEager('../assets/levels/*.json')
    const sourceTilesets = import.meta.globEager('../assets/tilesets/*.json')
    const sourceImages = import.meta.globEager('../assets/images/**/*.png')
    const sourceTemplates = import.meta.globEager('../assets/object templates/**/*.json')

    const loadTileSet = async (tileset) => ({ ...tileset, img: await loadImage(tileset.image.replace('../', '../assets/')) })
    const assignTilesets = (tilesets) => (map) => ({ ...map, tilesets: map.tilesets.map(tileset => ({ ...tileset, ...tilesets[getFileName(tileset.source)] })) })
    const tilesets = await mapToFileName(sourceTilesets, loadTileSet)
    const levels = await mapToFileName(sourceLevels, assignTilesets(tilesets))
    const images = await mapToFileName(sourceImages)
    const templates = await mapToFileName(sourceTemplates)


    return {
        levels,
        tilesets,
        images,
        templates,
        async load(name) {
            this.images[name] = await loadImage(images[name].default)
            return this.images[name]
        }
    }
})();
window.AssetManager = AssetManager
export default AssetManager