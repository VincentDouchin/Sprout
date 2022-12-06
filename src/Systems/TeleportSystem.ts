import Coroutines from "../Coroutines";
import { Entity, System } from "../ECS";
import { map, world } from "../Initialize";
import TeleporterComponent from "../Components/TeleporterComponent";
import TeleportableComponent from "../Components/TeleportableComponent";
import BodyComponent from "../Components/BodyComponent";
import AnimationComponent from "../Components/AnimationComponent";
import PositionComponent from "../Components/PositionComponent";
import EntityCollectionComponent from "../Components/EntityCollectionComponent";

const TeleportSystem = new System(
	TeleporterComponent,
	(entity: Entity, teleporter) => {
		const [body, animation] = entity.getComponents(BodyComponent, AnimationComponent)


		const contactList = body.getContactList()
		contactList.forEach((target: Entity) => {
			const [teleportable, targetPosition, targetBody] = target.getComponents(TeleportableComponent, PositionComponent, BodyComponent)

			if (teleportable && teleportable.canTeleport) {
				teleportable.canTeleport = false
				targetBody.stopped = true
				const teleporTarget = () => {
					map.change(teleporter.to)
					const targetTeleport = map.map.getComponent(EntityCollectionComponent).entities
						.find((entity: Entity) => {
							const targetTeleporter = entity.getComponent(TeleporterComponent)
							return targetTeleporter.name == teleporter.name
						})
					const targetTeleportPosition = targetTeleport.getComponent(PositionComponent)

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
				if (animation) {
					animation.playAnimation('smallDoor').then(() => teleporTarget())
				} else {
					teleporTarget()
				}


			}
		})
	}
)
export default TeleportSystem