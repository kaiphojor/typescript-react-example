import {useState} from 'react';
import {useEffectOnce, useFetch} from 'usehooks-ts';
import type Product from '../types/Product';

function useFetchProductsOld() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffectOnce(() => {
		console.log('fetch products');
		// Fetch
		const fetchProducts = async () => {
			const url = 'http://localhost:3000/products';
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data.products);
		};

		// (()=>{})(); 형태로 실행하는 방법도 있다.
		fetchProducts();
	});

	return products;
}

type ProductsResult = {
	products: Product[];
};
export default function useFetchProducts() {
	const url = 'http://localhost:3000/products';

	const {data} = useFetch<ProductsResult>(url);
	if (!data) {
		return [];
	}

	return data.products;
}
