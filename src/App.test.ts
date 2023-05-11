
// App.spec.ts 도 가능
const add = (...numbers: number[]): number => (
	numbers.reduce((acc, current) => acc + current, 0)
);

const context = describe;

// 평면적인 나열
test('add test', () => {
	// 인자가 없으면 0
	expect(add()).toBe(0);

	// 두 숫자의 합
	expect(add(1, 2)).toBe(3);

	// 세 숫자의 합
	expect(add(33, 34, 33)).toBe(100);
});

// 구조화
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
			// When
			const result = add(2);

			// Then
			expect(result).toBe(2);
		});
	});

	context('with no argument', () => {
		it('returns zero', () => {
			expect(add()).toBe(0);
		});
	});
});
