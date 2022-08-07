import Character from "./Character"

const Player = {
	create(options) {
		return {
			...Character.create(options),
			inventory: [{ category: 'seed', type: 'maize' }, { category: 'tool', type: 'hoe' }]
		}
	}
}
export default Player