import {type ChangeEvent, useState} from 'react';

type SetFilterTextProps = {
	setFilterText: (value: string) => void;
};

type TextFieldProps = {
	placeholder: string;
	filterText: string;

} & SetFilterTextProps;

export default function TextField({
	placeholder,
	filterText,
	setFilterText,
}: TextFieldProps) {
	// Const [filterText, setFilterText] = useState<string>('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setFilterText(value);
		console.log(value);
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Search...'
				value={filterText}
				onChange={handleChange}
			/>
		</div>
	);
}
