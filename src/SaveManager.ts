import { MouseJoint } from "planck"
import { ECS, Entity } from "./ECS"
import { scene } from "./Initialize"
import MeshManager from "./MeshManager"

const SaveManager = new class {
	saver: Saver
	save() {

		this.saver.save({
			components: [...ECS.components].map(([key, val]) => [key, [...val].map(([id, component]) => [id, component.save()])]),
			entities: [...ECS.entities.keys()],
			meshes: [...MeshManager.meshes.entries()].reduce((acc, [id, mesh]: [number, THREE.Object3D]) => ({ ...acc, [id]: mesh.toJSON() }), {})
		})
	}
	async load() {

		const componentImport = import.meta.globEager('./Components/*.ts')
		Object.values(componentImport).forEach((componentModule) => {
			const componentClass = componentModule.default
			ECS.componentClasses[componentClass.name] = componentClass
			ECS.components.set(componentClass.name, new Map())
		})
		const { meshes, components, entities } = await this.saver.load()
		MeshManager.load(meshes)
		components.forEach(([componentName, componentsArray]) => {
			componentsArray.forEach(([id, componentData]) => {
				if (!ECS.componentClasses[componentName]?.prototype) debugger
				const component = Object.create(ECS.componentClasses[componentName].prototype)

				component.load(componentData)
				ECS.components.get(componentName).set(id, component)
			})
		})
		entities.forEach((id: string) => {
			const entity = Object.create(Entity.prototype)
			entity.id = id
			ECS.entities.set(id, entity)
		})

	}
	setSaver(saver: Saver) {
		this.saver = saver
	}
}
export default SaveManager