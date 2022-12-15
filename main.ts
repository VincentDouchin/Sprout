import Engine from './src/Engine'
import Run from './src/GameStates/Run'
import AssetManager from './src/AssetManager'

(async function () {
	const engine = Engine()

	for (const name of ['', 'Amélie', 'Clémentine', 'Hughie', 'Jack']) {
		await AssetManager.load(`${name ? name + ' - ' : ''}Premium Charakter Spritesheet`)
	}
	await AssetManager.load('Light cow animations')
	await AssetManager.load('door animation sprites')
	await AssetManager.load('selectors')
	await AssetManager.load('containers')
	await AssetManager.load('Farming Plants')
	await AssetManager.load('All items')
	const SummerPixel = new FontFace('SummerPixel', 'url(../assets/fonts/SummerPixel22Regular-jE0W7.ttf)');
	await SummerPixel.load()
	const m5x7 = new FontFace('m5x7', 'url(../assets/fonts/m5x7.ttf)');
	await m5x7.load()
	//@ts-ignore
	document.fonts.add(SummerPixel)
	//@ts-ignore
	document.fonts.add(m5x7)


	const run = Run()

	engine.setStates({ run })
	engine.setState('run')
	engine.start()

}())
