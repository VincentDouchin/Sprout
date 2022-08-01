import Engine from './src/Engine'
import Run from './src/GameStates/Run'

const engine = Engine()
const run = Run()


engine.setStates({ run })
engine.setState('run')
engine.start()


