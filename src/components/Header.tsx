import {type SyntheticEvent} from 'react';

export default function Header() {
	const handleClick = (event: SyntheticEvent) => {
		event.preventDefault();
		const state = {};
		const title = '';
		const url = '/about';
		window.history.pushState(state, title, url);
	};

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href='/' onClick={handleClick}>Home</a>
					</li>
					<li>
						<a href='/about' onClick={handleClick}>About</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
