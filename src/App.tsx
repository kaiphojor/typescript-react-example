/* eslint-disable @typescript-eslint/naming-convention */
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

const pages = {
	'/': HomePage,
	'/about': AboutPage,
};

export function App() {
	return (
		<div>
			<Header/>
			<main>
				<Routes>
					<Route path='/' element={<HomePage/>} />
					<Route path='/about' element={<AboutPage/>} />
				</Routes>
			</main>
			<Footer/>
		</div>
	);
}
