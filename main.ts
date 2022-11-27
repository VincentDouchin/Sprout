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

	const run = Run()

	engine.setStates({ run })
	engine.setState('run')
	engine.start()

}())
