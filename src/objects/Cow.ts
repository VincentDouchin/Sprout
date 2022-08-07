
import Entity from "../Components/Entity";
import Sprite from "../Components/Sprite";


const Cow = {
	create(position: position, color = 'Light') {
		return Entity.create({
			sprite: {
				img: `${color} cow animations`,
				animations: ['idle', 'run'],
				tileSize: 32,
				animationsLength: { idle: 3 },
				speed: 16
			},
			position
		})

	},

}
export default Cow