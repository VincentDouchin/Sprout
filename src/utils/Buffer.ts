const Buffer = (width: number, height: number): CanvasRenderingContext2D => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', { alpha: true })
    ctx.canvas.height = height
    ctx.canvas.width = width ?? 16 / 9 * height
    ctx.imageSmoothingEnabled = false
    ctx.canvas.style['image-rendering'] = 'pixelated'
    return ctx
}
export default Buffer