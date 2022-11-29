import { generateUUID } from "three/src/math/MathUtils"

const ECS = new class {
	entities = new Map()
	systems: System[] = []
	components = new Map()

	getComponents(Component: Constructor<Component>): Map<string, Component> {
		return this.components.get(Component.name)
	}
	update() {
		this.systems.forEach(system => {
			if (!this.getComponents(system.target)) return
			const entities = Array.from(this.getComponents(system.target).keys()).map((id: string) => this.getEntityById(id))
			if (system.preUpdate) {
				system.preUpdate(entities)
			}
			this.getComponents(system.target).forEach((component: Component, id: string) => {
				system.update(this.getEntityById(id), component)
			})
			if (system.postUpdate) {
				system.postUpdate(entities)
			}

		})
	}
	registerComponent(component: Component) {
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
	parent: string
	constructor(...components: Component[]) {
		this.id = generateUUID()
		ECS.entities.set(this.id, this)
		components.forEach(component => this.addComponent(component))
	}
	getComponents(...components: Constructor<Component>[]) {
		return components.map((component) => this.getComponent(component))
	}
	getComponent(component: Constructor<Component>) {
		return ECS.components?.get(component.name)?.get(this.id)
	}
	addComponent(component: Component) {
		ECS.components.get(component.constructor.name).set(this.id, component)
		if (component.bind) {
			component.bind(this.id)
		}
	}
	removeComponent(component: Constructor<Component>) {
		ECS.getComponents(component).get(this.id)?.destroy()
		ECS.getComponents(component).delete(this.id)
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
interface systemOptions {
	preUpdate?: Function
	postUpdate?: Function
}
class System {
	update: Function
	target: any
	preUpdate: null | Function
	postUpdate: null | Function
	constructor(target: Constructor<Component>, fn: Function, options: systemOptions = {}) {
		this.target = target
		this.update = fn
		if (options?.preUpdate) {
			this.preUpdate = options?.preUpdate
		}
		if (options?.postUpdate) {
			this.postUpdate = options?.postUpdate
		}

	}
}
interface Component {
	bind(id: string): void
	destroy(): void
}
class Component {
	id: string
	constructor() {
		ECS.registerComponent(this)
		this.id = generateUUID()
	}

}

export { ECS, Entity, System, Component }