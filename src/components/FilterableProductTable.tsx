import type Product from '../types/Product';
import filterProducts from '../utils/filterProducts';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import {useState} from 'react';

type FilterableProductTableProps = {
	products: Product[];
};

export default function FilterableProductTable({
	products,
}: FilterableProductTableProps) {
	// InStockOnly가 있어야 하는 곳
	const [inStockOnly, setInStockOnly] = useState<boolean>(false);
	// FilterText 있어야 하는 곳
	const [filterText, setFilterText] = useState<string>('');

	const filterStockOnly = (product: Product, inStockOnly: boolean) => !inStockOnly || product.stocked;
	const filteredProducts = filterProducts(products, {
		filterText, inStockOnly,
	});

	return (
		<div className='filterable-product-table'>
			<SearchBar
				inStockOnly={inStockOnly}
				setInStockOnly={setInStockOnly}
				filterText={filterText}
				setFilterText={setFilterText}
			/>
			<ProductTable
				products={filteredProducts}
			/>
		</div>
	);
}
