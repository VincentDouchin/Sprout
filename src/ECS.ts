import { generateUUID } from "three/src/math/MathUtils"
const serialize = obj => {
	if (obj?._serialize) obj = obj._serialize()
	switch (obj?.constructor.name) {
		case 'Array': return obj.map(serialize)
		case 'Map': return [...obj].map(([key, val]) => [key, serialize(val)])
		case 'String': return obj
		// case 'Object': return Object.entries(obj).reduce((acc, [key, val]) => ({ ...acc, [key]: serialize(val) }), {})
		case 'Object': {
			const serializedObj = {}
			for (let [key, val] of Object.entries(obj)) {
				serializedObj[key] = serialize(val)
			}
			return serializedObj
		}
		default: return typeof obj == 'object' ? serialize({ ...obj }) : obj
	}
}
const ECS = new class {
	entities = new Map()
	systems: System[] = []
	components = new Map()
	componentClasses = {}
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
	getComponentById(id: string) {
		return this.components.get(id)
	}


}

class Entity {
	id: string

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
		component.parentId = this.id
		if (component.bind) {
			component.bind(this.id)
		}
		ECS.components.get(component.constructor.name).set(this.id, component)
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
	parentId: string
	arguments: any[]
	get parent() {
		return ECS.getEntityById(this.parentId)
	}
	constructor(args) {
		this.id = generateUUID()
		ECS.registerComponent(this)
		this.arguments = [...args]

	}
	destroy() {

	}
	save() {
		return serialize(this)
	}
	load(serializedObj: any) {
		Object.assign(this, serializedObj)
	}

}

export { ECS, Entity, System, Component }