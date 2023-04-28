import {type ChangeEvent, useState} from 'react';

type TextFieldProps = {
	placeholder: string;
	filterText: string;
	setFilterText: (arg0: string) => void;
};

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
