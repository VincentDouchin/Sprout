const Entity: any = class {
	add(component: any) {
		Object.assign(this, { [component.constructor.name]: component })
		if ('setUserData' in component) {
			component.setUserData(this)
		}
		return this
	}
}

export default Entity