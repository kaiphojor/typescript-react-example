import {fireEvent, render, screen} from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
	// Given
	const label = 'Name';
	const text = 'Tester';

	const setText = jest.fn();

	beforeEach(() => {
		// SetText.mockClear();
		jest.clearAllMocks();
	});

	function renderTextField() {
		render(
			<TextField
				label={label}
				placeholder='Input your name'
				text={text}
				setText={setText}
			/>);
	}

	function inputText(value: string) {
		fireEvent.change(screen.getByLabelText(label), {
			target: {value},
		});
	}

	it('renders elements', () => {
		// When
		renderTextField();

		// Then
		screen.getByLabelText(label);
		screen.getAllByPlaceholderText(/name/);
		screen.getByDisplayValue(text);

		// ----------
	});

	// Context: 입력했을 때
	context('when user enters name', () => {
		beforeEach(() => {
			// Given
			renderTextField();
		});

		it('calls "setTest" handler', () => {
			// When
			inputText('New Name');
			// Then
			expect(setText).toBeCalledWith('New Name');
		});
	});
});
