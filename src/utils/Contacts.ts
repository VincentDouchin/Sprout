import { world } from "../Initialize"
import Entity from "../Components/Entity"

const Contacts = {
	contacts: {},
	evaluateContacts(subject, events) {
		this.contacts[subject.id] = { on: events, off: {} }
	},
	update() {
		Object.keys(this.contacts).forEach((id) => {
			const events = this.contacts[id].on
			const subject = Entity.getEntityById(id)
			const firstContact = subject.body.getContactList()
			const targets = []
			if (firstContact) {
				const checkContact = contact => {
					const entities = ['A', 'B'].map(letter => Entity.getEntityById(contact.contact['getFixture' + letter]().getUserData()?.id))
					const target = entities.find(entity => entity?.id != id)
					if (target && events[target.type]) {
						targets.push(target.id)


						const fn = events[target.type].bind(subject, target)
						this.contacts[id].off[target.id] = fn()



					}
					if (contact.next) checkContact(contact.next)
				}
				checkContact(firstContact)

			}
			Object.keys(this.contacts[id].off).forEach(targetId => {
				if (!targets.includes(targetId)) {
					const cleanUp = this.contacts[id].off[targetId]
					if (cleanUp) cleanUp()
					console.log(this.contacts[id].off)
					delete this.contacts[id].off[targetId]
				}
			})
		})
	}
}
export default Contacts