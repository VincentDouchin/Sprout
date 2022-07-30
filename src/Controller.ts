const Controller = (keys: any) => {
	const Input = function () {
		return {
			active: false,
			down: false,
			get once() {
				if (this.active) {
					this.active = false
					return true
				}
				return false
			},
			getInput(state) {
				if (this.down != state) this.active = state
				this.down = state
			}
		}
	}
	const inputs = keys.actions.reduce((acc, v) => ({ ...acc, [v]: Input() }), {})
	const keyDownUp = (e) => {

		e.preventDefault()
		const state = e.type == 'keydown'
		const key = keys.keyboard?.[e.code]
		if (key) inputs[key].getInput(state)

	}
	document.addEventListener('keydown', keyDownUp)
	document.addEventListener('keyup', keyDownUp)
	return inputs





}
export default Controller