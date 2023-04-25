type Product = {
	category: string;
	price: string;
	stocked: boolean;
	name: string;
};

const products: Product[] = [
	{category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
	{category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
	{category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
	{category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
	{category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
	{category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
];

type ProductsInCategoryProps = {
	category: string;
	products: Product[];
};

function ProductInCategory({category, products}: ProductsInCategoryProps) {
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
				<tr key={product.name}>
					<td>{product.name}</td>
					<td>{product.price}</td>
				</tr>
			))}
		</>
	);
}

export default function App() {
	const categories = products.reduce((acc: string[], product: Product) => (
		acc.includes(product.category) ? acc : [...acc, product.category]
	), []);

	return (
		<div className='filterable-product-table'>
			<div className='search-bar'>
				<input type='text' placeholder='Search...' />
			</div>
			<div>
				<input type='checkbox' id='only-stock'/>
				<label htmlFor='only-stock'>
            only show products in stock
				</label>
			</div>
          입력 컨트롤
          체크박스
			<p>Hello, World!</p>
			<table className='product-table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<ProductInCategory category={categories[0]} products={products}/>
					<ProductInCategory category={categories[1]} products={products}/>
				</tbody>

			</table>
		</div>
	);
}

