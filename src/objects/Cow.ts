import { Light } from "three";
import AssetManager from "../AssetManager";
import Sprite from "../Components/Sprite";
import SpriteAnimation from "../utils/SpriteAnimation";


const Cow = {
	create(position: planck.Vec2, color = 'Light') {
		const sprite = Sprite.create({
			img: `${color} cow animations`,
			animations: ['idle', 'run'],
			tileSize: 32,
			animationsLength: { idle: 3 },
			speed: 16


		})
		sprite.mesh.position.x = position.x
		sprite.mesh.position.y = position.y
		return { sprite }
	},
	destroy(cow) {
		if (cow.sprite) Sprite.destroy(cow.sprite)
		// Body.destroy(teleport.body)
	},
}
export default Cow