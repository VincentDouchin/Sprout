
// import Coroutines from "../Coroutines";
// import { ECS, Entity, System } from "../ECS";
// import { map, world } from "../Initialize";
// // const contacts = {
// // 	'player-teleport': (player: Entity, teleport: Entity) => {
// // 		const [playerPosition, playerBody, playerController] = player.getComponents('Position', 'Body', 'Controller')
// // 		if (playerController.canTeleport) {
// // 			const targetTeleportName = teleport.getComponent('Data').name
// // 			map.change(teleport.getComponent('Data').to)
// // 			const targetTeleport = map.map.getComponent('EntityCollection').entities
// // 				.find((entity: Entity) => {
// // 					const data = entity.getComponent('Data')
// // 					return data?.name == targetTeleportName
// // 				})
// // 			const targetTeleportPosition = targetTeleport.getComponent('Position')
// // 			playerPosition.x = targetTeleportPosition.x
// // 			playerPosition.y = targetTeleportPosition.y
// // 			playerBody.initialPosition = false
// // 			playerController.canTeleport = false


// // 		}
// // 	}
// // }
// const contacts = {
// 	player: {
// 		teleport: {
// 			on: (player: Entity, teleport: Entity) => {

// 				const [playerPosition, playerBody, playerController] = player.getComponents('Position', 'Body', 'Controller')
// 				if (playerController.canTeleport) {
// 					console.log('on')
// 					const targetTeleportName = teleport.getComponent('Data').name
// 					map.change(teleport.getComponent('Data').to)
// 					const targetTeleport = map.map.getComponent('EntityCollection').entities
// 						.find((entity: Entity) => {
// 							const data = entity.getComponent('Data')
// 							return data?.name == targetTeleportName
// 						})
// 					const targetTeleportPosition = targetTeleport.getComponent('Position')
// 					player.getComponent('Body').setInitialPosition(targetTeleportPosition.x, targetTeleportPosition.y)
// 					// playerPosition.x = targetTeleportPosition.x
// 					// playerPosition.y = targetTeleportPosition.y
// 					// playerBody.initialPosition = false
// 					playerController.canTeleport = false
// 				}
// 			},
// 			off: (player: Entity, teleport: Entity) => {
// 				if (!player.getComponent('Controller').canTeleport) {
// 					if (teleport.getComponent('Data').name == map.map.getComponent('Data').name) {
// 						console.log('off')
// 						player.getComponent('Controller').canTeleport = true
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// world.on('begin-contact', (c: planck.Contact) => {
// 	const entityA = ECS.getEntityById(c.getFixtureA().getBody().getUserData()['id'])
// 	const entityB = ECS.getEntityById(c.getFixtureB().getBody().getUserData()['id'])
// 	if ([entityA, entityB].every((entity: Entity) => {
// 		return entity.hasComponent('Interactable')
// 	})) {
// 		entityA.getComponent('Interactable').on.push(entityB)
// 	}
// })
// world.on('end-contact', (c: planck.Contact) => {
// 	const entityA = ECS.getEntityById(c.getFixtureA().getBody().getUserData()['id'])
// 	const entityB = ECS.getEntityById(c.getFixtureB().getBody().getUserData()['id'])
// 	if ([entityA, entityB].every((entity: Entity) => {
// 		return entity.hasComponent('Interactable')
// 	})) {
// 		entityA.getComponent('Interactable').off.push(entityB)
// 	}
// })

// const Interactions = new System(
// 	['Interactable', 'Body'],
// 	(entity: Entity) => {
// 		const interactable = entity.getComponent('Interactable')

// 		interactable.on.forEach((target: Entity, targetIndex: number) => {
// 			const targetType = target.getComponent('Interactable').type
// 			contacts[interactable.type][targetType].on(entity, target)
// 			interactable.on.slice(targetIndex, 1)
// 		})
// 		interactable.off.forEach((target: Entity, targetIndex: number) => {
// 			const targetType = target.getComponent('Interactable').type
// 			contacts[interactable.type][targetType].off(entity, target)
// 			interactable.off.slice(targetIndex, 1)
// 		})
// 	}
// )
// export default Interactions