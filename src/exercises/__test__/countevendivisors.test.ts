import { countEvenDivisors } from '../countevendivisors';

describe('count even divisors', () => {
  test('n = 1 (no even divisors)', () => {
    expect(countEvenDivisors(1)).toBe(0);
  });

  test('n = 2', () => {
    expect(countEvenDivisors(2)).toBe(1);
  });

  test('n = 6', () => {
    expect(countEvenDivisors(6)).toBe(2);
  });

  test('n = 12', () => {
    expect(countEvenDivisors(12)).toBe(4);
  });

  test('n = 28', () => {
    expect(countEvenDivisors(28)).toBe(4);
  });

  test('n = 36', () => {
    expect(countEvenDivisors(36)).toBe(6);
  });
});
