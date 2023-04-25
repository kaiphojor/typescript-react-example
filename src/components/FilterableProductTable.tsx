import type Product from '../types/Product';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

type FilterableProductTableProps = {
	products: Product[];
};

export default function FilterableProductTable({products}: FilterableProductTableProps) {
	return (
		<div className='filterable-product-table'>
			<SearchBar/>
			<ProductTable products={products}/>
		</div>
	);
}
