import {fireEvent, render, screen} from '@testing-library/react';
import TextField from './TextField';

test('TextField', () => {
	// Given
	const label = 'Name';
	const text = 'Tester';

	let called = false;
	const setText = jest.fn(() => {
		called = true;
	});

	// When
	render(
		<TextField
			label={label}
			placeholder='Input your name'
			text={text}
			setText={setText}
		/>);

	// Then
	screen.getByLabelText(label);
	screen.getAllByPlaceholderText(/name/);
	screen.getByDisplayValue(text);

	// ----------
	// when
	fireEvent.change(screen.getByLabelText(label), {
		target: {value: 'New Name'},
	});

	expect(called).toBeTruthy();
});
