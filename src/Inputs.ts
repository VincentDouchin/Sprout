const Inputs = (keys: any) => {
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
			getInput(state: boolean) {
				if (this.down != state) this.active = state
				this.down = state
			}
		}
	}
	const inputs = keys.actions.reduce((acc: any, v: string) => ({ ...acc, [v]: Input() }), {})
	const downUp = (type: string, callback: Function) => (e: KeyboardEvent) => {

		// e.preventDefault()
		const state = e.type == type
		const key = callback(e)
		if (key) inputs[key].getInput(state)

	}
	const keyDownUp = downUp('keydown', (e: KeyboardEvent) => keys.keyboard?.[e.code])
	const pointerDownUp = downUp('pointerdown', (e: PointerEvent) => keys.mouse?.[e.button])

	document.addEventListener('pointerdown', pointerDownUp)
	document.addEventListener('pointerup', pointerDownUp)
	document.addEventListener('keydown', keyDownUp)
	document.addEventListener('keyup', keyDownUp)
	return inputs
}
export default Inputs