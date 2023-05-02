import {useEffect} from 'react';

function Timer() {
	useEffect(() => {
		console.log('effect');
		setInterval(() => {
			document.title = `NOW: ${new Date().getTime()}`;
		}, 100);
	});

	return null;
}

export default function TimerControl() {
	return (
		<Timer/>
	);
}
