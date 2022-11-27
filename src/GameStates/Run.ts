import { world, scene, render, camera, renderer, map } from '../Initialize'
import Light from '../Components/Light'
import { ECS, Entity } from '../ECS'
import { Clock } from 'three'



import Player from "../Entities/Player"
import Movement from '../Systems/Movement'
import Teleport from '../Systems/Teleport'
import Farming from '../Systems/Farming'
import Renderer from '../Systems/Renderer'
import Selection from '../Systems/Selection'
import UIRenderer from '../Systems/UIRenderer'
import ItemPickUp from '../Systems/ItemPickUp'

const Run = () => {
	ECS.registerSystem(Movement)
	ECS.registerSystem(Teleport)
	ECS.registerSystem(Farming)
	ECS.registerSystem(Renderer)
	ECS.registerSystem(Selection)
	ECS.registerSystem(UIRenderer)
	ECS.registerSystem(ItemPickUp)
	const player = Player('Amélie', 1200, -340)
	// //! Lights
	const light = new Entity(new Light())

	// //! Objects
	map.load('map')

	const clock = new Clock()

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