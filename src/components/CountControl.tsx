
import useCounterStore from '../hooks/useCounterStore';

// UI

export default function CountControl() {
	const store = useCounterStore();

	const handleClickIncrease = () => {
		store.count += 1;
		store.publish();
	};

	const handleClickDecrease = () => {
		store.count -= 1;
		store.publish();
	};

	return (
		<div>
			<p>{store.count}</p>
			<button type='button' onClick={handleClickIncrease}>
        Increase
			</button>
			<button type='button' onClick={handleClickDecrease}>
        Decrease
			</button>
		</div>
	);
}

