import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

// Const pages = {
// 	'/': HomePage,
// 	'/about': AboutPage,
// };

export function App() {
	const path = window.location.pathname;

	return (
		<div>
			<Header/>
			<main>
				{path === '/' && <HomePage/>}
				{path === '/about' && <AboutPage/>}
			</main>
			<Footer/>
		</div>
	);
}
