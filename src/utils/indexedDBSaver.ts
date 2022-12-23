import PromisedIDB from './PromisedIDB'

const PromisedIDBSaver = new class implements Saver {
	db = null
	async initDB() {
		if (!this.db) {
			this.db = await PromisedIDB('Sprout', { saves: 'key' })
		}
	}
	async save(serializedObject: any) {
		await this.initDB()
		await this.db.put('saves', { save: serializedObject, key: 0 })
	}
	async load() {
		await this.initDB()
		return (await this.db.get('saves', 0)).save
	}
}
export default PromisedIDBSaver