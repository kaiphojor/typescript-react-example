import type Product from '../types/Product';

function normalize(text: string) {
	return text.trim().toLowerCase();
}

export default function filterProducts(
	products: Product[],
	filterText: string,
) {
	const query = normalize(filterText);

	if (!query) {
		return products;
	}

	const contains = (product: Product) => (
		normalize(product.name).includes(query)
	);

	return products.filter(contains);
}
