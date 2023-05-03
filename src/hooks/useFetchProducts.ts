import {useState} from 'react';
import {useEffectOnce, useFetch} from 'usehooks-ts';
import type Product from '../types/Product';

function useFetchProductsOld() {
	const [products, setProducts] = useState<Product[]>([]);

	// Fetch
	const fetchProducts = async () => {
		const url = 'http://localhost:3000/products';
		const response = await fetch(url);
		const data = await response.json();
		setProducts(data.products);
	};

	useEffectOnce(() => {
		console.log('fetch products');
		// (()=>{})(); 형태로 실행하는 방법도 있다.
		fetchProducts();
	});

	return products;
}

export default function useFetchProducts(): Product[] {
	const url = 'http://localhost:3000/products';
	const {data} = useFetch(url);
	if (!data) {
		return [];
	}

	return data.products;
}
