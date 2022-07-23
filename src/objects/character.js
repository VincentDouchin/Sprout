import getPlane from "./plane";
import AssetManager from "../AssetManager";
import Buffer from "../utils/buffer";

const Character = async () => {
	const img = await AssetManager.load('Basic Charakter Spritesheet')
	const buffer = Buffer(48, 48)
	buffer.drawImage(img, 0, 0, 48, 48, 0, 0, 48, 48)
	return getPlane(buffer)
}
export default Character