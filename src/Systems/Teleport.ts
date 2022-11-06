import Coroutines from "../Coroutines";
import { Entity, System } from "../ECS";
import { map, world } from "../Initialize";

const Teleport = new System(
	'Teleporter',
	(entity: Entity, teleporter) => {
		const [body, sprite] = entity.getComponents('Body', 'Sprite')


		const contactList = body.getContactList()
		contactList.forEach((target: Entity) => {
			const [teleportable, targetPosition, targetBody] = target.getComponents('Teleportable', 'Position', 'Body')

			if (teleportable && teleportable.canTeleport) {
				teleportable.canTeleport = false
				targetBody.stopped = true
				const teleporTarget = () => {
					map.change(teleporter.to)
					const targetTeleport = map.map.getComponent('EntityCollection').entities
						.find((entity: Entity) => {
							const targetTeleporter = entity.getComponent('Teleporter')
							return targetTeleporter.name == teleporter.name
						})
					const targetTeleportPosition = targetTeleport.getComponent('Position')

					targetPosition.setPosition(targetTeleportPosition.x, targetTeleportPosition.y)
					targetBody.stopped = false
					Coroutines.add(function* () {
						while (true) {
							yield
							if (targetBody.getContactList().some((entityContacted: Entity) => entityContacted.id == targetTeleport.id)) {
								while (true) {
									yield
									if (!targetBody.getContactList().some((entityContacted: Entity) => entityContacted.id == targetTeleport.id)) {
										teleportable.canTeleport = true

										return

									}
								}
							}
						}

					})
				}
				if (sprite) {
					sprite.playAnimation('smallDoor').then(() => teleporTarget())
				} else {
					teleporTarget()
				}


			}
		})
	}
)
export default Teleport