import {render, screen} from '@testing-library/react';
import App from './App';

jest.mock('./hooks/useFetchProducts', () => () => [
	{
		category: 'Fruits', price: '$1', stocked: true, name: 'Apple!',
	},
]);

test('App', () => {
	render(<App/>);

	screen.getByText(/Apple/);
});
