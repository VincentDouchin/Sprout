

const getFileName = path => path.split(/[\/.]/).at(-2)
const mapToFileName = async (obj, fn = x => x) => (await Promise.all(Object.entries(obj)
    .map(async ([key, val]) => [getFileName(key), await fn(val)])
)).reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})

const loadImage = (path: string) => new Promise((resolve, reject) => {
    const image = new Image()
    image.src = path
    image.onload = () => resolve(image)
    image.onerror = () => resolve('')
})

const assignObjectProps = (tileObject: any) => tileObject.properties?.reduce((acc: any, v: any) => ({ ...acc, [v.name]: v.value }), {}) ?? {}

const AssetManager = await (async () => {
    const sourceLevels = import.meta.globEager('../assets/levels/*.json')
    const sourceTilesets = import.meta.globEager('../assets/tilesets/**/*.*')
    const sourceImages = import.meta.globEager('../assets/images/**/*.png')
    const sourceTemplates = import.meta.globEager('../assets/object templates/**/*.json')
    const sourceItems = import.meta.globEager('../assets/items/*.json')


    const loadTileSet = async (tileset) => ({
        ...tileset,
        img: await loadImage(tileset.image.replace(/..\/..\/|..\//, '../assets/')),
        tiles: tileset?.tiles?.map(tile => ({ ...tile, ...assignObjectProps(tile) }))
    })
    const assignTilesets = (tilesets) => (map) => ({ ...map, tilesets: map.tilesets.map(tileset => ({ ...tileset, ...tilesets[getFileName(tileset.source)] })) })
    const tilesets = await mapToFileName(sourceTilesets, loadTileSet)
    const items = await mapToFileName(sourceItems, loadTileSet)
    const levels = await mapToFileName(sourceLevels, assignTilesets(tilesets))
    const images = await mapToFileName(sourceImages)
    const templates: any = await mapToFileName(sourceTemplates)

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