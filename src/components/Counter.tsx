
import {useEffect} from 'react';
import {container} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';
import Store from '../store/Store';

// UI

export default function Counter() {
	const store = container.resolve(Store);

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
