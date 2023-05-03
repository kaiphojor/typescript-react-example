import {useEffect, useState} from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import TimerControl from './components/TimerControl';
import type Product from './types/Product';

// C const products: Product[] = [
// 	{
// 		category: 'Fruits', price: '$1', stocked: true, name: 'Apple',
// 	},
// 	{
// 		category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit',
// 	},
// 	{
// 		category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit',
// 	},
// 	{
// 		category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach',
// 	},
// 	{
// 		category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin',
// 	},
// 	{
// 		category: 'Vegetables', price: '$1', stocked: true, name: 'Peas',
// 	},
// ];

export default function App() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		console.log('EFFECT!');
		// Fetch
		const fetchProducts = async () => {
			const url = 'http://localhost:3000/products';
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data.products);
		};
		// (()=>{})(); 형태로 실행하는 방법도 있다.

		fetchProducts();
	}, []);
	return (
		<div>
			<TimerControl/>
			<hr/>
			<h1></h1>
			<FilterableProductTable products={products}/>
		</div>
	);
}

