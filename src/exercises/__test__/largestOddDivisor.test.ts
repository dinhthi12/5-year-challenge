import { largestOddDivisor } from '../largestOddDivisor'

describe('Largest odd divisor', () => {
  it('Should return 25 for n = 100', () => {
    expect(largestOddDivisor(100)).toBe(25)
  })

  it('Should return 45 for n = 45 (already odd)', () => {
    expect(largestOddDivisor(45)).toBe(45)
  })

  it('Should return 1 for n = 64 (power of 2)', () => {
    expect(largestOddDivisor(64)).toBe(1)
  })

  it('Should return 9 for n = 18', () => {
    expect(largestOddDivisor(18)).toBe(9)
  })

  it('Should return 7 for n = 28', () => {
    expect(largestOddDivisor(28)).toBe(7)
  })

  it('Should return 1 for n = 2', () => {
    expect(largestOddDivisor(2)).toBe(1)
  })

  it('Should return 1 for n = 1 (edge case)', () => {
    expect(largestOddDivisor(1)).toBe(1)
  })
})
