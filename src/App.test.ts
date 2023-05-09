
// App.spec.ts 도 가능
const add = (...numbers: number[]): number => (
	numbers.reduce((x, y) => x + y, 0)
);

const context = describe;

test('add test', () => {
	expect(add(1, 1, 1)).toBe(3);
	expect(add(1, 2, 3)).toBe(6);
	expect(add(33, 34, 33)).toBe(100);
});

describe('add', () => {
	context('with three arguments', () => {
		it('returns sum of three numbers', () => {
			expect(add(3, 4, 5)).toBe(12);
		});
	});

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

	context('with no argument', () => {
		it('returns zero', () => {
			expect(add()).toBe(0);
		});
	});
});
