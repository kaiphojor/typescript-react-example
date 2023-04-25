import CheckField from './CheckField';

export default function SearchBar() {
	return (
		<div className='search-bar'>
			<div>
				<input type='text' placeholder='Search...' />
			</div>
			<CheckField label='only show products in stock'/>
		</div>
	);
}
