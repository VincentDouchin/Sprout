import { Component } from "../ECS";

class Collection extends Component {
	collection = []
	constructor(...components: any[]) {
		super()
		components.forEach((component: Component) => {
			this.collection.push(component)
		})
	}
	destroy() {

		this.collection.forEach((component: Component) => {
			component.destroy()
		})
		this.collection.length = 0
	}
}
export default Collection