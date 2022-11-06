import { world, scene, render, camera, renderer, map } from '../Initialize'
import Light from '../Components/Light'
import { ECS } from '../ECS'
import Animations from '../Systems/Animations'
import Movement from '../Systems/Movement'
import { Clock } from 'three'



import Player from "../Entities/Player"
import { Entity } from '../ECS'
import Teleport from '../Systems/Teleport'
import Farming from '../Systems/Farming'

const Run = () => {
	ECS.registerSystem(Animations)
	ECS.registerSystem(Movement)
	ECS.registerSystem(Teleport)
	ECS.registerSystem(Farming)
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