import {render, screen} from '@testing-library/react';
import {App} from './App';
import {createMemoryRouter, MemoryRouter, RouterProvider} from 'react-router-dom';
import routes from './routes';

const context = describe;

describe('App', () => {
	context('when the current path is "/"', () => {
		it('renders the home page', () => {
			const router = createMemoryRouter(routes, {initialEntries: ['/']});
			render((
				<RouterProvider router={router}/>
			));
			screen.getByText(/Welcome/);
		});
	});
	context('when the current path is "/about"', () => {
		it('renders the about page', () => {
			const router = createMemoryRouter(routes, {initialEntries: ['/about']});
			render((
				<RouterProvider router={router}/>
			));
			screen.getByText(/This is test/);
		});
	});
});
