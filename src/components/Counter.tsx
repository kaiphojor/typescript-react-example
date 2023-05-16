import {useEffect, useReducer, useState} from 'react';

let count = 0;

// Function reducer(state) {
// 	return {...state, x: state.x + 1};
// }

export default function Counter() {
	// Const [, forceUpdate] = useReducer(reducer, {x: 0});
	const [state, setState] = useState(0);

	const forceUpdate = () => {
		setState(state + 1);
	};

	useEffect(() => {
		console.log(count);
	});
	// Const [count, setCount] = useState(0);
	const handleClick = () => {
		// SetCount;
		count += 1;
		// 강제 렌더링
		forceUpdate();
	};

	return (
		<div>
			<p>{count}</p>
			<button type='button' onClick={handleClick}>
        Increase
			</button>
		</div>
	);
}
