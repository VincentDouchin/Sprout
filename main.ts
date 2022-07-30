import './style.css'

import Engine from './src/Engine'
import Run from './src/GameStates/Run'

const engine = Engine()
const run = await Run()


engine.setStates({ run })
engine.setState('run')
engine.start()


