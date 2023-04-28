import selectCategories from '../utils/selectCategories';
import ProductInCategory from './ProductsInCategory';

import type Product from '../types/Product';

type ProductTableProps = {
	products: Product[];
	inStockOnly: boolean;
};

export default function ProductTable({
	products,
	inStockOnly,
}: ProductTableProps) {
	const categories = selectCategories(products);

	return (
		<table className='product-table'>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{categories.map(category => (
					<ProductInCategory
						key={category}
						category={category}
						products={products}
						inStockOnly={inStockOnly}
					/>
				))}
			</tbody>
		</table>
	);
}
