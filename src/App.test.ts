
// App.spec.ts 도 가능
const add = (x: number, y: number) => (
	x + y
);

describe('add', () => {
	const context = describe;
	context('with two arguments', () => {
		it('returns sum of two numbers', () => {
			expect(add(3, 4)).toBe(7);
		});
	});
});

test('add 함수', () => {
	expect(add(1, 2)).toBe(3);
});
