import { Light } from "three";
import AssetManager from "../AssetManager";
import SpriteAnimation from "../utils/SpriteAnimation";


const Cow = (position: planck.Vec2, color = 'Light') => {
	const sprite = SpriteAnimation({
		img: `${color} cow animations`,
		animations: ['idle', 'run'],
		tileSize: 32,
		animationsLength: { idle: 3 },
		speed: 16


	})
	sprite.mesh.position.x = position.x
	sprite.mesh.position.y = position.y
	return sprite
}
export default Cow