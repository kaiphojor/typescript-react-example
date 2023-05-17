
import {container} from 'tsyringe';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../store/Store';

// UI

export default function CountControl() {
	const store = container.resolve(Store);

	const handleClick = () => {
		store.count += 1;
		// 강제 렌더링
		store.update();
	};

	return (
		<div>
			<button type='button' onClick={handleClick}>
        Increase
			</button>
		</div>
	);
}

