/* eslint-disable @typescript-eslint/naming-convention */
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

const pages = {
	'/': HomePage,
	'/about': AboutPage,
};

export function App() {
	const path = window.location.pathname;

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const Page = Reflect.get(pages, path) || HomePage;
	return (
		<div>
			<Header/>
			<main>
				<Page/>
			</main>
			<Footer/>
		</div>
	);
}
