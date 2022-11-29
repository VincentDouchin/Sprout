import { easeInOutCubic } from 'tween-functions'
const tweenGenerator = (tweenFunction: Function = easeInOutCubic) => function* (value: number, target: number, duration: number) {
	const tween = function* () {
		let counter = 0
		const initialValue = value
		while (counter < duration) {
			counter++
			yield tweenFunction(counter, initialValue, target, duration)

		}
		return value

	}

	for (let val of tween()) {
		value = val
		yield
	}


}
export default tweenGenerator