import {type ChangeEvent, useState, useRef} from 'react';

type SetFilterTextProps = {
	setText: (value: string) => void;
};

type TextFieldProps = {
	label: string;
	placeholder: string;
	text: string;

} & SetFilterTextProps;

export default function TextField({
	label,
	placeholder,
	text,
	setText,
}: TextFieldProps) {
	// Const [filterText, setFilterText] = useState<string>('');
	const id = useRef(`input-${Math.random()}`);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setText(value);
		console.log(value);
	};

	return (
		<div>
			<label htmlFor={id.current}>
				{label}
			</label>
			<input
				id={id.current}
				type='text'
				placeholder={placeholder}
				value={text}
				onChange={handleChange}
			/>
		</div>
	);
}
