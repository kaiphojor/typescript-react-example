
import CheckField from './CheckField';
import TextField from './TextField';

type SearchBarProps = {
	inStockOnly: boolean;
	setInStockOnly: (arg0: boolean) => void;
	filterText: string;
	setFilterText: (arg0: string) => void;
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
			<CheckField label='only show products in stock'
				inStockOnly={inStockOnly}
				setInStockOnly={setInStockOnly}
			/>
		</div>
	);
}
