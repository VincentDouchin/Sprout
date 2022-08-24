import Entity from "../Components/Entity"
import Character from "./Character"


const Player = {
	create(options): Character {
		const player = Character.create(options)
		Entity.assignData(player, { inventory: [{ category: 'seed', type: 'maize' }, { category: 'tool', type: 'hoe' }] })
		player.type = 'player'
		return player

	}
}
export default Player