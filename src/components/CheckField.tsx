import {useRef, useState} from 'react';

type CheckBoxFieldProps = {
	label: string;
	inStockOnly: boolean;
	setInStockOnly: (arg0: boolean) => void;
};

export default function CheckField({
	label,
	inStockOnly,
	setInStockOnly,
}: CheckBoxFieldProps) {
	// UseRef - uuid 같은 id 가져온다
	const id = useRef(`checkbox-${label}`.replace(/ /g, '-').toLowerCase());

	const handleChange = () => {
		console.log('changed checkbox');
		setInStockOnly(!inStockOnly);
	};

	return (
		<div>
			<input type='checkbox'
				id={id.current}
				checked={inStockOnly}
				onChange={handleChange}
			/>
			<label htmlFor={id.current}>
				{label}
			</label>
		</div>
	);
}
