const darkMode = false;
function primaryColor() {
	if (darkMode) {
		return darkMode ? '#F00' : '#00F';
	}
}

export default function Greeting() {
	return (
		<p
			style={{
				color: primaryColor(),
			}}
		>Hello, World!
		</p>
	);
}
