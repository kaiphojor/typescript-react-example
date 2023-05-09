
// App.spec.ts 도 가능
const add = (...numbers: number[]): number => (
	numbers.reduce((x, y) => x + y)
);

const context = describe;

describe('add', () => {
	context('with two arguments', () => {
		it('returns sum of two numbers', () => {
			expect(add(3, 4)).toBe(7);
		});
	});

	context('with only one argument', () => {
		it('returns the same number', () => {
			expect(add(3)).toBe(3);
		});
	});
});
