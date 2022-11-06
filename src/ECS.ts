import { generateUUID } from "three/src/math/MathUtils"

const ECS = new class {
	entities = new Map()
	systems: System[] = []
	components = new Map()
	update() {
		this.systems.forEach(system => {

			this.components.get(system.target).forEach((component: Component, id: string) => {

				system.update(this.getEntityById(id), component)
			})
			// this.entities
			// 	.forEach(entity => {
			// 		if (system.targets.every((target) => entity.hasComponent(target))) {
			// 			system.update(entity)
			// 		}
			// 	})
		})
	}
	registerComponent(component) {
		if (!this.components.get(component.constructor.name)) {
			this.components.set(component.constructor.name, new Map())
		}
	}

	registerSystem(system: System) {
		this.systems.push(system)
	}
	getEntityById(id: string) {
		return this.entities.get(id)
	}
}

class Entity {
	id: string
	constructor(...components) {
		this.id = generateUUID()
		ECS.entities.set(this.id, this)
		components.forEach(component => this.addComponent(component))
	}
	getComponents(...componentNames: string[]) {
		return componentNames.map((name: string) => this.getComponent(name))
	}
	getComponent(componentName: string) {
		return ECS.components.get(componentName).get(this.id)
	}
	addComponent(component) {
		ECS.components.get(component.constructor.name).set(this.id, component)
		if (component.bind) {
			component.bind(this.id)
		}
	}
	removeComponent(componentName: string) {
		ECS.components.get(componentName).delete(this.id)
	}
	destroy() {

		ECS.components.forEach((componentMap: Map<string, Component>) => {

			const component = componentMap.get(this.id)
			if (component) {
				component.destroy()
				componentMap.delete(this.id)
			}
		})
		ECS.entities.delete(this.id)
	}
}

class System {
	update: Function
	target: string
	constructor(target: string, fn: Function) {
		this.target = target
		this.update = fn

	}
}
class Component {
	id: string
	constructor() {
		ECS.registerComponent(this)
	}
	destroy() {

	}
}
export { ECS, Entity, System, Component }