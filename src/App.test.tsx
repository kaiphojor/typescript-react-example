import {render, screen} from '@testing-library/react';
import App from './App';
import useFetchProducts from './hooks/useFetchProducts';

// Jest.mock('./hooks/useFetchProducts', () => () => fixtures.products);
jest.mock('./hooks/useFetchProducts');

test('App', () => {
	render(<App/>);

	screen.getByText(/Apple/);

	expect(useFetchProducts).toBeCalled();
});
