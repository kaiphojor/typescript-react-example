function CheckField({label}: {
	label: string;
}) {
	// UseRef
	const id = `checkbox-${label}`.replace(/ /g, '-').toLowerCase();

	return (
		<div>
			<input type='checkbox' id={id}/>
			<label htmlFor={id}>
				{label}
			</label>
		</div>
	);
}

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
