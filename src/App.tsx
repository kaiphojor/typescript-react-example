import Greeting from './components/Greeting';
import Switch from './components/Switch';

import {Reset} from 'styled-reset';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';
import {ThemeProvider} from 'styled-components';

export default function App() {
	const theme = defaultTheme;

	return (
		<ThemeProvider theme={theme}>
			<Reset/>
			<GlobalStyle/>
			<Greeting/>
			<Switch/>
		</ThemeProvider>
	);
}
