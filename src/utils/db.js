import { 
	AsyncStorage
} from 'react-native';

class Storage {
	async get(key) {
		return JSON.parse(await AsyncStorage.getItem(key));
	}

	async set(key, item) {
		await AsyncStorage.setItem(key, JSON.stringify(item));
	}

	async remove(key) {
		await AsyncStorage.removeItem(key);
	}

	async getAllKeys() {
		return await AsyncStorage.getAllKeys();
	}

	async multiGet(keys) {
		return (await AsyncStorage.multiGet(keys)).map(item => JSON.parse(item));
	}

	async multiSet(entries) {
		for (const entry of entries) {
			entry[1] = JSON.stringify(entry[1]);
		}
		await AsyncStorage.multiSet(entries);
	}
}

export default new Storage();
