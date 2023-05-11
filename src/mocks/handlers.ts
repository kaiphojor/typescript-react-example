// Src/mocks/handlers.js
import {rest} from 'msw';
import fixtures from '../../fixtures';

const handlers = [
	rest.get('http://localhost:3000/products', async (req, res, ctx) => {
		const {products} = fixtures;

		return res(
			ctx.status(200),
			ctx.json({products}),
		);
	}),
];

export default handlers;
