import {useRef, useState} from 'react';

type CheckBoxFieldProps = {
	label: string;
};

export default function CheckField({label}: CheckBoxFieldProps) {
	// UseRef - uuid 같은 id 가져온다
	const id = useRef(`checkbox-${label}`.replace(/ /g, '-').toLowerCase());
	const [inStockOnly, setInStockOnly] = useState<boolean>(false);

	const handleChange = () => {
		console.log('changed checkbox');
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
