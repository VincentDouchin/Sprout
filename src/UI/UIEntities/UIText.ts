import { MeshBasicMaterial, MeshStandardMaterial } from "three"
import SpriteComponent from "../../Components/SpriteComponent"
import { Entity } from "../../ECS"
import Buffer from "../../utils/Buffer"
import UIElementComponent from "../UIComponents/UIElementComponent"

const UIText = (text: string) => {
	const buffer = Buffer(32, 32)

	buffer.fillStyle = 'black'
	buffer.textAlign = 'center'
	buffer.textBaseline = 'middle'
	buffer.font = '32px m5x7'
	buffer.fillText(text, 16, 16)
	return new Entity(
		new SpriteComponent(buffer, { renderOrder: 3, scale: 0.4, material: MeshBasicMaterial }),
		new UIElementComponent('text')
	)
}
export default UIText