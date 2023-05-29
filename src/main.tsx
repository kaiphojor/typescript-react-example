import ReactDOM from 'react-dom/client';

function App() {
	const style = {
		color: '#00F',
	};

	return (
		<p style={style}>Hello, World!</p>
	);
}

const element = document.getElementById('root');

if (element) {
	const root = ReactDOM.createRoot(element);

	root.render(<App/>);
}
