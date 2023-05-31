/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import 'styled-components';

import Theme from './Theme';

declare module 'styled-components' {

	// Export interface DefaultTheme extends Theme {
	// 	colors: {
	// 		background: string;
	// 		text: string;
	// 		primary: string;
	// 		secondary: string;
	// 	};
	// }
	export interface DefaultTheme extends Theme {}

}
