import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {Layout} from './components/Layout';

const routes = [
	{
		element: <Layout/>,
		children: [
			{path: '/', element: <HomePage/>},
			{path: '/about', element: <AboutPage/>},
		],
	},
];

const router = createBrowserRouter(routes);

export function App() {
	return (
		<RouterProvider router={router}/>
	);
}
