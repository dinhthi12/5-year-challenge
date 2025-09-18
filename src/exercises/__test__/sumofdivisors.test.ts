import { sumOfDivisors } from '../sumofdivisors';

describe('sum of divisors', () => {
  test('Case 1: n = 1', () => {
    expect(sumOfDivisors(1)).toBe(1);
  });

  test('Case 2: n = 6', () => {
    expect(sumOfDivisors(6)).toBe(12);
  });

  test('Case 3: n = 12', () => {
    expect(sumOfDivisors(12)).toBe(28);
  });

  test('Case 4: n = 16 (perfect square)', () => {
    expect(sumOfDivisors(16)).toBe(31);
  });

  test('Case 5: n = 13 (prime number)', () => {
    expect(sumOfDivisors(13)).toBe(14);
  });
});
