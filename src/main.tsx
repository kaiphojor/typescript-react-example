import ReactDOM from 'react-dom/client';

const darkMode = false;
function primaryColor() {
	if (darkMode) {
		return darkMode ? '#F00' : '#00F';
	}
}

function App() {
	return (
		<p
			style={{
				color: primaryColor(),
			}}
		>Hello, World!
		</p>
	);
}

const element = document.getElementById('root');

if (element) {
	const root = ReactDOM.createRoot(element);

	root.render(<App/>);
}
