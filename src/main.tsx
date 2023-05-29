import ReactDOM from 'react-dom/client';

function App() {
	return (
		<p className='greeting'>Hello, World!</p>
	);
}

const element = document.getElementById('root');

if (element) {
	const root = ReactDOM.createRoot(element);

	root.render(<App/>);
}
