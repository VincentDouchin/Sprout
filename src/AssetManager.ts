import { assignObjectProps, getFileName } from "./utils/Functions"


const mapToFileName = async (obj, fn = x => x) => (await Promise.all(Object.entries(obj)
    .map(async ([key, val]) => [getFileName(key), await fn(val)])
)).reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})

const loadImage = (path: string) => new Promise((resolve, reject) => {
    const image = new Image()
    image.src = path
    image.onload = () => resolve(image)
    image.onerror = () => resolve('')
})


const AssetManager = await (async () => {
    //! Source
    const sourceLevels = import.meta.globEager('../Sprout/assets/levels/*.json')
    const sourceTilesets = import.meta.globEager('../Sprout/assets/tilesets/**/*.*')
    const sourceImages = import.meta.globEager('../Sprout/assets/images/**/*.png')
    const sourceTemplates = import.meta.globEager('../Sprout/assets/object templates/**/*.json')
    const sourceItems = import.meta.globEager('../Sprout/assets/items/*.json')

    //! Loaders
    const loadTileSet = async (tileset) => ({
        ...tileset,
        img: await loadImage(tileset.image.replace(/..\/..\/|..\//, '../Sprout/assets/')),
        tiles: tileset?.tiles?.map(tile => ({ ...tile, ...assignObjectProps(tile) }))
    })
    const assignTemplateProps = (template: any) => ({ ...template.object, ...assignObjectProps(template.object) })
    const assignTilesets = (tilesets) => (map) => ({ ...map, tilesets: map.tilesets.map(tileset => ({ ...tileset, ...tilesets[getFileName(tileset.source)] })) })

    //! Transforms
    const tilesets = await mapToFileName(sourceTilesets, loadTileSet)
    const items = await mapToFileName(sourceItems, loadTileSet)
    const levels = await mapToFileName(sourceLevels, assignTilesets(tilesets))
    const images: any = await mapToFileName(sourceImages)
    const templates: any = await mapToFileName(sourceTemplates, assignTemplateProps)


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