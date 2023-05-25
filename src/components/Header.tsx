import {Link, NavLink, useNavigate} from 'react-router-dom';

export default function Header() {
	const navigate = useNavigate();
	const handleClickLogout = () => {
		navigate('/');
	};

	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
					<li>
						<button type='button' onClick={handleClickLogout}>
							Log out
						</button>
						{/* <NavLink to='/logout'>Log Out</NavLink> */}
					</li>
				</ul>
			</nav>
		</header>
	);
}
