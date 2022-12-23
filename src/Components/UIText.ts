import { Component } from "../ECS";
import { Text } from 'troika-three-text'

class UIText extends Component {
	text: string = ''
	oldText: string = ''
	align: string
	mesh: Text
	constructor(text: string) {
		super(arguments)
		this.mesh = new Text()
		this.mesh.text = text
		this.mesh.fontSize = 16
		this.mesh.font = '../assets/fonts/m5x7.ttf'
		this.mesh.color = 0xffffff


	}
	setText(newText: string) {

		this.text = newText
		this.mesh.text = this.text
	}
	redraw() {
		return this.text != this.oldText
	}
	save() {
		return JSON.parse(JSON.stringify(this))

	}
	load(serializedObj: any) {
		Object.assign(this, serializedObj)
		this.mesh = new Text(this.text)
	}

}
export default UIText