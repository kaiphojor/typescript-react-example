
import {container} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';
import Store from '../store/Store';

// UI

export default function Counter() {
	const store = container.resolve(Store);

	const forceUpdate = useForceUpdate();
	// Const [count, setCount] = useState(0);
	const handleClick = () => {
		store.count += 1;
		// 강제 렌더링
		forceUpdate();
	};

	return (
		<div>
			<p>{store.count}</p>
			<button type='button' onClick={handleClick}>
        Increase
			</button>
		</div>
	);
}

