
import {container} from 'tsyringe';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../store/Store';

// UI

export default function CountControl() {
	const store = container.resolve(Store);

	const handleClickIncrease = () => {
		store.count += 1;
		// 강제 렌더링
		store.update();
	};

	const handleClickDecrease = () => {
		store.count -= 1;
		// 강제 렌더링
		store.update();
	};

	return (
		<div>
			<button type='button' onClick={handleClickIncrease}>
        Increase
			</button>
			<button type='button' onClick={handleClickDecrease}>
        Increase
			</button>
		</div>
	);
}

