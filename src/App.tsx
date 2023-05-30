import Greeting from './components/Greeting';
import Switch from './components/Switch';

import {Reset} from 'styled-reset';

export default function App() {
	return (
		<div>
			<Reset/>
			<Greeting/>
			<Switch/>
		</div>
	);
}
