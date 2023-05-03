import {useEffect, useRef, useState} from 'react';

function Timer() {
	useEffect(() => {
		const savedTitle = document.title;
		const id = setInterval(() => {
			document.title = `NOW: ${new Date().getTime()}`;
		}, 100);

		// 함수 리턴 - > effect clear
		return () => {
			clearInterval(id);
			document.title = savedTitle;
		};
	});

	return <p>Playing</p>;
}

export default function TimerControl() {
	const counter = useRef(1);

	const [playing, setPlaying] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		console.log('Effect');
	}, []);

	const handleClick = () => {
		counter.current += 1;
		// SetPlaying(!playing);
	};

	return (
		<div>
			<p>{counter.current}</p>
			{playing ? (<Timer/>) : (<p>Stop</p>)}
			<button type='button' onClick={handleClick}>
        Toggle
			</button>
			<p>{count}</p>
			<button type='button' onClick={() => {
				setCount(count + 1);
			}}>
        Increase
			</button>
		</div>
	);
}
