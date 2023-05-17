import {singleton} from 'tsyringe';

type Listener = () => void;

@singleton()
export default class Store {
	count = 0;

	listeners = new Set<Listener>();

	update() {
		this.listeners.forEach(listener => {
			listener();
		});
	}

	addListener(listener: Listener) {
		this.listeners.add(listener);
	}

	removeListener(listener: Listener) {
		this.listeners.delete(listener);
	}
}
