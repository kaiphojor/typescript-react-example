import {fireEvent, screen, render} from '@testing-library/react';
import {container} from 'tsyringe';

import App from './App';

const context = describe;

test('App', () => {
	render(<App/>);
});

describe('App', () => {
	beforeEach(() => {
		container.clearInstances();
		render(<App/>);
	});
	context('when press Increase button once', () => {
		it('Count: 1 is shown on the screen', () => {
			fireEvent.click(screen.getByText('Increase'));
			const elements = screen.getAllByText('Count: 1');
			expect(elements).toHaveLength(2);
		});
	});
	context('when press Increase button twice', () => {
		it('Count: 2 is shown on the screen', () => {
			fireEvent.click(screen.getByText('Increase'));
			fireEvent.click(screen.getByText('Increase'));
			const elements = screen.getAllByText('Count: 2');
			expect(elements).toHaveLength(2);
		});
	});
});
