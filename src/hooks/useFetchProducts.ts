import {useEffect, useState} from 'react';
import type Product from '../types/Product';

export default function useFetchProducts() {
	const [products, setProducts] = useState<Product[]>([]);

	// Fetch
	const fetchProducts = async () => {
		const url = 'http://localhost:3000/products';
		const response = await fetch(url);
		const data = await response.json();
		setProducts(data.products);
	};

	useEffect(() => {
		// (()=>{})(); 형태로 실행하는 방법도 있다.
		fetchProducts();
	}, []);

	return {products, fetchProducts};
}
