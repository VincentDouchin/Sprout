interface HealthOptions {
	max?: number
	value?: number
}
const health = class {
	value: number
	max: number
	constructor({ max = 12, value = 12 }: HealthOptions = {}) {
		this.value = value
		this.max = max
	}
	heal(val = 1) {
		this.value += val
	}
	damage(val = 1) {
		this.value -= val
	}

}
export default health