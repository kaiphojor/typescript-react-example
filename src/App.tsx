
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';

const routes = [
	{path: '/', element: <HomePage/>},
	{path: '/about', element: <AboutPage/>},
];

const router = createBrowserRouter(routes);

export function App() {
	return (
		<RouterProvider router={router}/>
	);
	// Return (
	// 	<div>
	// 		<Header/>
	// 		<main>
	// 			<Routes>
	// 				<Route path='/' element={<HomePage/>} />
	// 				<Route path='/about' element={<AboutPage/>} />
	// 			</Routes>
	// 		</main>
	// 		<Footer/>
	// 	</div>
	// );
}
