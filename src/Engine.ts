import Coroutines from "./Coroutines"
const Engine = function () {

	let raf_handle: number
	let accumulated_time = 0
	let current_time = 0
	let time_step = 1000 / 60


	let state
	let states
	const cycle = (time_stamp: number) => {
		raf_handle = window.requestAnimationFrame(cycle)

		accumulated_time += time_stamp - current_time
		current_time = time_stamp;

		let updated = false

		if (accumulated_time > 60) accumulated_time = time_step

		while (accumulated_time >= time_step) {
			state.update()
			Coroutines.run()
			updated = true
			accumulated_time -= time_step
		}
		if (updated) {
			state.render()
		}
	}
	const setState = (_state, options = {}) => {
		if (!_state) return

		const s = states[_state]
		s.set(options)
		state = s
	}
	return {
		setState,
		setStates(_states) {
			states = _states
		},
		start() {
			raf_handle = window.requestAnimationFrame(cycle)
		},
		stop() {
			window.cancelAnimationFrame(raf_handle)
		}
	}
}

export default Engine