import { sumOfDivisorsSmallerN } from '../sumofdivisorssmallern';

describe('sum of divisors smaller n', () => {
  test('n = 1 → no divisors smaller than 1', () => {
    expect(sumOfDivisorsSmallerN(1)).toBe(0);
  });

  test('n = 2 → divisors: [1], sum = 1', () => {
    expect(sumOfDivisorsSmallerN(2)).toBe(1);
  });

  test('n = 6 → divisors: [1, 2, 3], sum = 6', () => {
    expect(sumOfDivisorsSmallerN(6)).toBe(6);
  });

  test('n = 12 → divisors: [1, 2, 3, 4, 6], sum = 16', () => {
    expect(sumOfDivisorsSmallerN(12)).toBe(16);
  });

  test('n = 25 → divisors: [1, 5], sum = 6', () => {
    expect(sumOfDivisorsSmallerN(25)).toBe(6);
  });

  test('n = 36 → divisors: [1, 2, 3, 4, 6, 9, 12, 18], sum = 55', () => {
    expect(sumOfDivisorsSmallerN(36)).toBe(55);
  });

  test('prime number n = 13 → divisors: [1], sum = 1', () => {
    expect(sumOfDivisorsSmallerN(13)).toBe(1);
  });
});
