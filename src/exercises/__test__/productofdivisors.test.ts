import { productOfDivisors } from '../productofdivisors';

describe('product of divisors', () => {
  test('Case 1: n = 1', () => {
    expect(productOfDivisors(1)).toBe(1);
  });

  test('Case 2: n = 6', () => {
    expect(productOfDivisors(6)).toBe(36);
  });

  test('Case 3: n = 12', () => {
    expect(productOfDivisors(12)).toBe(1728);
  });

  test('Case 4: n = 16 (perfect square)', () => {
    expect(productOfDivisors(16)).toBe(1024);
  });

  test('Case 5: n = 13 (prime)', () => {
    expect(productOfDivisors(13)).toBe(13);
  });
});
