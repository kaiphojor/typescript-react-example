import {useEffect, useState} from 'react';

function Timer() {
	useEffect(() => {
		const savedTitle = document.title;

		console.log('effect');
		const id = setInterval(() => {
			document.title = `NOW: ${new Date().getTime()}`;
		}, 100);
		// 함수 리턴 - > effect clear
		return () => {
			console.log('End Of Effect');
			clearInterval(id);
			document.title = savedTitle;
		};
	});

	return <p>Playing</p>;
}

export default function TimerControl() {
	const [playing, setPlaying] = useState<boolean>(false);

	const handleClick = () => {
		setPlaying(!playing);
	};

	return (
		<div>
			{playing ? (<Timer/>) : (<p>Stop</p>)}
			<button type='button' onClick={handleClick}>
        Toggle
			</button>
		</div>
	);
}
