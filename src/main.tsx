import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

async function main() {
	// Fetch
	const url = 'http://localhost:3000/products';
	const response = await fetch(url);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data = await response.json();
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const {products} = data;
	console.log(products);

	const element = document.getElementById('root');

	if (!element) {
		return;
	}

	const root = ReactDOM.createRoot(element);
	root.render((
		<React.StrictMode>
			<App products={products}/>
		</React.StrictMode>
	));
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
