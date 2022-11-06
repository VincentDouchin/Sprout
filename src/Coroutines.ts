const Coroutines = new class {
	coroutines = []
	add(fn: any) {
		const generator = fn()
		generator.next()
		this.coroutines.push(() => generator.next())
	}
	run() {
		for (let i = this.coroutines.length - 1; i >= 0; i--) {
			const { done } = this.coroutines[i]()
			if (done) {
				this.coroutines.splice(i, 1)
			}
		}
	}
}

export default Coroutines