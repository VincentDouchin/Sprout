import Engine from './src/Engine'
import Run from './src/GameStates/Run'
import AssetManager from './src/AssetManager'
import PromisedIDBSaver from './src/utils/indexedDBSaver'
import SaveManager from './src/SaveManager'
import { preloadFont } from 'troika-three-text'
(async function () {
	SaveManager.setSaver(PromisedIDBSaver)
	const engine = Engine()
	await SaveManager.load()
	for (const name of ['', 'Amélie', 'Clémentine', 'Hughie', 'Jack']) {
		await AssetManager.load(`${name ? name + ' - ' : ''}Premium Charakter Spritesheet`)
	}
	await AssetManager.load('Light cow animations')
	await AssetManager.load('door animation sprites')
	await AssetManager.load('selectors')
	await AssetManager.load('containers')
	await AssetManager.load('Farming Plants')
	await AssetManager.load('All items')




	await new Promise<void>((resolve) => preloadFont(
		{ font: '../assets/fonts/m5x7.ttf', },
		() => resolve()
	))


	const run = Run()

	engine.setStates({ run })
	engine.setState('run')
	engine.start()

}())
