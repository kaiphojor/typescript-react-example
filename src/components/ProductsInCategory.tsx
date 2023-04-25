import ProductRow from './ProductRow';
import CategoryRow from './CategoryRow';

import type Product from '../types/Product';

type ProductsInCategoryProps = {
	category: string;
	products: Product[];
};

export default function ProductInCategory({
	category, products,
}: ProductsInCategoryProps) {
	const productsInCategory = products.filter(product => (
		product.category === category
	));

	return (
		<>
			<CategoryRow category={category} />
			{productsInCategory.map(product => (
				<ProductRow key={product.name} product={product} />
			))}
		</>
	);
}
