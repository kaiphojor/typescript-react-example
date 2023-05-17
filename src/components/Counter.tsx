
import {useEffect} from 'react';
import {container} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';
import CounterStore from '../store/CounterStore';

// UI

export default function Counter() {
	const store = container.resolve(CounterStore);

	const forceUpdate = useForceUpdate();

	useEffect(() => {
		store.addListener(forceUpdate);

		return () => {
			store.removeListener(forceUpdate);
		};
	}, [store, forceUpdate]);

	return (
		<div>
			<p>
        Count:
				{' '}
				{store.count}
			</p>
		</div>
	);
}
