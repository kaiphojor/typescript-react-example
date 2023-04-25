import type Product from '../types/Product';

type ProductsInCategoryProps = {
	category: string;
	products: Product[];
};

function ProductRow({product}: {product: Product}) {
	return (
		<tr>
			<td>{product.name}</td>
			<td>{product.price}</td>
		</tr>
	);
}

export default function ProductInCategory({category, products}: ProductsInCategoryProps) {
	const productsInCategory = products.filter(product => (
		product.category === category
	));

	return (
		<>
			<tr>
				<th colSpan={2}>
					{category}
				</th>
			</tr>
			{productsInCategory.map(product => (
				<ProductRow key={product.name} product={product} />
			))}
		</>
	);
}
