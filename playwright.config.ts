/* eslint-disable @typescript-eslint/naming-convention */
import {type PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './tests',
	retries: 0,
	use: {
		channel: 'chrome',
		baseURL: 'http://localhost:8080',
		// eslint-disable-next-line no-implicit-coercion
		headless: !!process.env.CI,
		screenshot: 'only-on-failure',
	},
};

export default config;
