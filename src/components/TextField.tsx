import {type ChangeEvent, useState, useRef} from 'react';

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
	const id = useRef(`input-${Math.random()}`);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setFilterText(value);
		console.log(value);
	};

	return (
		<div>
			<label htmlFor={id.current}>
				Search
			</label>
			<input
				id={id.current}
				type='text'
				placeholder='Search...'
				value={filterText}
				onChange={handleChange}
			/>
		</div>
	);
}
