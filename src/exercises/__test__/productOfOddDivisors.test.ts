import { productOfOddDivisors } from '../productOfOddDivisors'

describe('product of odd divisors', () => {
  it('should return 1 when n = 1 (only odd divisor is 1)', () => {
    expect(productOfOddDivisors(1)).toBe(1)
  })

  it('should return 3 for n = 12 (odd divisors: 1, 3)', () => {
    expect(productOfOddDivisors(12)).toBe(3)
  })

  it('should return 225 for n = 15 (odd divisors: 1, 3, 5, 15)', () => {
    expect(productOfOddDivisors(15)).toBe(225)
  })

  it('should return 27 for n = 36 (odd divisors: 1, 3, 9)', () => {
    expect(productOfOddDivisors(36)).toBe(27)
  })

  it('should return 945 for n = 45 (odd divisors: 1, 3, 5, 9, 15, 45)', () => {
    expect(productOfOddDivisors(45)).toBe(91125)
  })
})
