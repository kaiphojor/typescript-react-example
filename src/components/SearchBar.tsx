
import CheckBoxField from './CheckBoxField';
import TextField from './TextField';

type SearchBarProps = {
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
	filterText: string;
	setFilterText: (value: string) => void;
};

export default function SearchBar({
	inStockOnly,
	setInStockOnly,
	filterText,
	setFilterText,
}: SearchBarProps) {
	return (
		<div className='search-bar'>
			<TextField
				placeholder='Search...'
				filterText={filterText}
				setFilterText={setFilterText}
			/>
			<CheckBoxField label='only show products in stock'
				inStockOnly={inStockOnly}
				setInStockOnly={setInStockOnly}
			/>
		</div>
	);
}
