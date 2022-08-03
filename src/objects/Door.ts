import AssetManager from "../AssetManager"
import SpriteAnimation from "../utils/SpriteAnimation"


const Door = () => {
	const sprite = SpriteAnimation({
		img: 'door animation sprites',
		tileSize: 16,
		animations: ['smallDoor'],
		animationsLength: { smallDoor: 6 },
		repeat: false,
		backwards: true,
		once: true,
		autoStart: false
	})
	sprite.mesh.renderOrder = 0
	return sprite
}
export default Door