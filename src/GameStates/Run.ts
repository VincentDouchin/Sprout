import { world, scene, render, camera, renderer, map, clock } from '../Initialize'
import LightComponent from '../Components/LightComponent'
import { ECS, Entity } from '../ECS'



import PlayerEntity from "../Entities/PlayerEntity"
import MovementSystem from '../Systems/MovementSystem'
import TeleportSystem from '../Systems/TeleportSystem'
import FarmingSystem from '../Systems/FarmingSystem'
import RendererSystem from '../Systems/RendererSystem'
import SelectionSystem from '../Systems/SelectionSystem'
import UIRendererSystem from '../Systems/UIRendererSystem'
import ItemPickUp from '../Systems/ItemPickUpSystem'

const Run = () => {
	ECS.registerSystem(MovementSystem)
	ECS.registerSystem(TeleportSystem)
	ECS.registerSystem(FarmingSystem)
	ECS.registerSystem(RendererSystem)
	ECS.registerSystem(SelectionSystem)
	ECS.registerSystem(UIRendererSystem)
	ECS.registerSystem(ItemPickUp)
	const player = PlayerEntity('Amélie', 1200, -340)
	// //! Lights
	const light = new Entity(new LightComponent())

	// //! Objects
	map.load('map')



	return {
		//+ Update
		update() {
			ECS.update()

			world.step(clock.getDelta() * 1000)

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