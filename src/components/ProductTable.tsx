import type Product from '../types/Product';
import ProductInCategory from './ProductsInCategory';

type ProductTableProps = {
	products: Product[];
};

export default function ProductTable({products}: ProductTableProps) {
	const categories = products.reduce((acc: string[], product: Product) => (
		acc.includes(product.category) ? acc : [...acc, product.category]
	), []);

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
					/>
				))}
			</tbody>
		</table>
	);
}
