import {useRef} from 'react';

type CheckBoxFieldProps = {
	label: string;
};

export default function CheckField({label}: CheckBoxFieldProps) {
	// UseRef - uuid 같은 id 가져온다
	const id = useRef(`checkbox-${label}`.replace(/ /g, '-').toLowerCase());

	return (
		<div>
			<input type='checkbox' id={id.current}/>
			<label htmlFor={id.current}>
				{label}
			</label>
		</div>
	);
}
