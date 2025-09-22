import { sumOfEvenDivisors } from '../sumofevendivisors';

describe('sum Of Even Divisors', () => {
  test('Case 1: n = 12', () => {
    expect(sumOfEvenDivisors(12)).toBe(24);
  });

  test('Case 2: n = 15', () => {
    expect(sumOfEvenDivisors(15)).toBe(0);
  });

  test('Case 3: n = 36', () => {
    expect(sumOfEvenDivisors(36)).toBe(78);
  });

  test('Case 4: n = 2 (smallest even number)', () => {
    expect(sumOfEvenDivisors(2)).toBe(2);
  });

  test('Case 5: n = 1 (smallest odd number)', () => {
    expect(sumOfEvenDivisors(1)).toBe(0);
  });
});
