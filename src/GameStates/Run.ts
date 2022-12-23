import { world, scene, render, camera, renderer, map, clock, inputs } from '../Initialize'
import LightComponent from '../Components/LightComponent'
import { ECS, Entity } from '../ECS'



import PlayerEntity from "../Entities/PlayerEntity"
import MovementSystem from '../Systems/MovementSystem'
import TeleportSystem from '../Systems/TeleportSystem'
import FarmingSystem from '../Systems/FarmingSystem'
import RendererSystem from '../Systems/RendererSystem'
import ItemPickUp from '../Systems/ItemPickUpSystem'
// import InventoryRendererSystem from '../Systems/InventoryRendererSystem'
import UIElementComponent from '../Components/UIElementComponent'
import UIManager from '../UI/UIManager'
import UIMain from '../UI/UIScreens/UIMain'
import UISystem from '../UI/UISystem'
import SaveManager from '../SaveManager'
const Run = () => {
	UIManager.screen = UIMain()
	// ECS.registerSystem(UISystem)

	ECS.registerSystem(MovementSystem)
	ECS.registerSystem(TeleportSystem)
	ECS.registerSystem(FarmingSystem)
	ECS.registerSystem(RendererSystem)
	ECS.registerSystem(ItemPickUp)

	// //! Lights
	const light = new Entity(new LightComponent())

	// //! Objects
	// const player = PlayerEntity('Amélie', 100, -300)
	// map.load('zelaMap')


	return {
		//+ Update
		update() {
			ECS.update()

			world.step(clock.getDelta() * 1000)
			if (inputs.save.once) {
				SaveManager.save()
			}
			if (inputs.load.once) {
				SaveManager.load()
			}

		},
		//+ Render
		render() {
			render()


		},
		//+Set
		set() {

		}
	}
}
export default Run