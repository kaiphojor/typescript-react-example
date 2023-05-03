import {useEffect, useRef, useState} from 'react';
import {useBoolean, useCounter} from 'usehooks-ts';
import useFetchProducts from '../hooks/useFetchProducts';

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
	const {value: playing, toggle: togglePlaying} = useBoolean(false);
	const {count, increment} = useCounter(0);

	const handleClick = () => {
		togglePlaying();
	};

	return (
		<div>
			{playing ? (<Timer/>) : (<p>Stop</p>)}
			<button type='button' onClick={togglePlaying}>
        Toggle
			</button>
			<p>{count}</p>
			<button type='button' onClick={increment}>
        Increase
			</button>
		</div>
	);
}
