import { countDivisors } from '../countdivisors';

describe('count Divisors', () => {
  test('Case 1: n = 1', () => {
    expect(countDivisors(1)).toBe(1);
  });

  test('Case 2: n = 2', () => {
    expect(countDivisors(2)).toBe(2);
  });

  test('Case 3: n = 6', () => {
    expect(countDivisors(6)).toBe(4);
  });

  test('Case 4: n = 12', () => {
    expect(countDivisors(12)).toBe(6);
  });

  test('Case 5: n = 36', () => {
    expect(countDivisors(36)).toBe(9);
  });
});
