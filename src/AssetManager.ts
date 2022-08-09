import { assignObjectProps, getFileName } from "./utils/Functions"


const mapToFileName = async (obj, fn = x => x) => (await Promise.all(Object.entries(obj)
    .map(async ([key, val]) => [getFileName(key), await fn(val)])
)).reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})

const loadImage = (path: string) => new Promise((resolve, reject) => {

    const image = new Image()
    image.src = path
    image.onload = () => resolve(image)
    image.onerror = (e) => resolve(image)
})

//! Source
const sourceLevels = import.meta.globEager('../assets/levels/*.json')
const sourceTilesets = import.meta.globEager('../assets/tilesets/**/*.*')
const sourceImages = import.meta.globEager('../assets/images/**/*.png')
const sourceTemplates = import.meta.globEager('../assets/object templates/**/*.json')
const sourceItems = import.meta.globEager('../assets/items/*.json')

//! Loaders
const loadTileSet = (images) => async (tileset) => ({
    ...tileset,
    img: await loadImage(images[getFileName(tileset.image)].default),
    tiles: tileset?.tiles?.map(tile => ({ ...tile, ...assignObjectProps(tile) }))
})
const assignTemplateProps = (template: any) => ({ ...template.object, ...assignObjectProps(template.object) })
const assignTilesets = (tilesets) => (map) => ({ ...map, tilesets: map.tilesets.map(tileset => ({ ...tileset, ...tilesets[getFileName(tileset.source)] })) })

//! Transforms
const images = await mapToFileName(sourceImages)
const tilesets = await mapToFileName(sourceTilesets, loadTileSet(images))
const items = await mapToFileName(sourceItems, loadTileSet(images))
const levels = await mapToFileName(sourceLevels, assignTilesets(tilesets))
const templates = await mapToFileName(sourceTemplates, assignTemplateProps)

const AssetManager = (() => {
    return {
        levels,
        tilesets,
        items,
        images,
        templates,
        async load(name: string) {
            this.images[name] = await loadImage(images[name].default)
            return this.images[name]
        }
    }
})();
export default AssetManager