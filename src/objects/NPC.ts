import Character from "./Character";
const NPC = (obj: any) => {
	const npc = Character({ ...obj, player: false })
	return { ...npc }
}
export default NPC