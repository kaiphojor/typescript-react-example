import {singleton} from 'tsyringe';
import BaseStore from './BaseStore';

const initalState = {
	count: 0;
};

@singleton()
export default class Store extends BaseStore {
	constructor() {
		super(initalState, reducer);


		function reducer (state, action){
			switch (action.type) {
				case 'increase':
					return {
						...state,
						count: state.count + 1,
					};
				default:
					return state;
			}
		};
	}

	listeners = new Set<Listener>();

	dispatch(action) {
		this.state = this.reducer(this.state, action);
		this.publish();
	}

	publish() {
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
