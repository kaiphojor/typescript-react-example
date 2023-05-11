import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import useFetchProducts from './hooks/useFetchProducts';

// Jest.mock('./hooks/useFetchProducts', () => () => fixtures.products);
// jest.mock('./hooks/useFetchProducts');

test('App', async () => {
	render(<App/>);

	await waitFor(() => (
		screen.getByText(/Apple/)
	));

	// Expect(useFetchProducts).toBeCalled();
});
