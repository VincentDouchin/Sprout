import { ECS, Entity } from "../ECS";

const UIManager = new class {
	screen: Entity


	subscribers: Map<string, Function[]> = new Map()

	subscribe(event: string, callback: Function) {
		console.log('subscribe', event)
		const subscribers = this.subscribers.get(event)
		if (subscribers) {
			subscribers.push(callback)
		} else {
			this.subscribers.set(event, [callback])
		}
	}
	publish(event: string, ...data: any) {
		console.log('publish', event)

		const subscribers = this.subscribers.get(event)
		if (subscribers) {
			for (const callback of subscribers) {
				callback(...data)
			}
		}
	}
}
export default UIManager