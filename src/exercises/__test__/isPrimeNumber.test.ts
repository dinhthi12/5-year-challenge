import { isPrimeNumber } from "../isPrimeNumber"


describe('is prime number', () => {
  it('should return false for numbers less than 2', () => {
    expect(isPrimeNumber(0)).toBe(false)
    expect(isPrimeNumber(1)).toBe(false)
  })

  it('should return true for prime numbers', () => {
    expect(isPrimeNumber(2)).toBe(true)
    expect(isPrimeNumber(3)).toBe(true)
    expect(isPrimeNumber(5)).toBe(true)
    expect(isPrimeNumber(7)).toBe(true)
    expect(isPrimeNumber(11)).toBe(true)
    expect(isPrimeNumber(17)).toBe(true)
  })

  it('should return false for composite numbers', () => {
    expect(isPrimeNumber(4)).toBe(false)
    expect(isPrimeNumber(6)).toBe(false)
    expect(isPrimeNumber(9)).toBe(false)
    expect(isPrimeNumber(12)).toBe(false)
    expect(isPrimeNumber(15)).toBe(false)
  })
})