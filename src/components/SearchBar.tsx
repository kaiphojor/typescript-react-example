export default function SearchBar() {
	return (
		<div className='search-bar'>
			<div>
				<input type='text' placeholder='Search...' />
			</div>
			<div>
				<input type='checkbox' id='only-stock'/>
				<label htmlFor='only-stock'>
				only show products in stock
				</label>
			</div>
		</div>
	);
}
