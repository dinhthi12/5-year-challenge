import { isPerfectNumber } from '../isperfectnumber'

describe('is perfect number', () => {
  it('should return false for n = 1 (not perfect)', () => {
    expect(isPerfectNumber(1)).toBe(false)
  })

  it('should return true for n = 6 (perfect number)', () => {
    expect(isPerfectNumber(6)).toBe(true)
  })

  it('should return true for n = 28 (perfect number)', () => {
    expect(isPerfectNumber(28)).toBe(true)
  })

  it('should return true for n = 496 (perfect number)', () => {
    expect(isPerfectNumber(496)).toBe(true)
  })

  it('should return true for n = 8128 (perfect number)', () => {
    expect(isPerfectNumber(8128)).toBe(true)
  })

  it('should return false for n = 12 (not perfect)', () => {
    expect(isPerfectNumber(12)).toBe(false)
  })

  it('should return false for a prime number n = 13', () => {
    expect(isPerfectNumber(13)).toBe(false)
  })

  it('should return false for a composite non-perfect number n = 100', () => {
    expect(isPerfectNumber(100)).toBe(false)
  })
})
