import {useEffect, useReducer, useState} from 'react';
import useForceUpdate from '../hooks/useForceUpdate';

const state = {
	count: 0,

};

export default function Counter() {
	const forceUpdate = useForceUpdate();
	// Const [count, setCount] = useState(0);
	const handleClick = () => {
		// SetCount;
		state.count += 1;
		// 강제 렌더링
		forceUpdate();
	};

	return (
		<div>
			<p>{state.count}</p>
			<button type='button' onClick={handleClick}>
        Increase
			</button>
		</div>
	);
}
