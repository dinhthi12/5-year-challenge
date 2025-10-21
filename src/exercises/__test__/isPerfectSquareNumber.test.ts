import { isPerfectSquareNumber } from '../isPerfectSquareNumber'

describe('is perfect square number', () => {
  it('should return true for perfect squares', () => {
    expect(isPerfectSquareNumber(1)).toBe(true)
    expect(isPerfectSquareNumber(4)).toBe(true)
    expect(isPerfectSquareNumber(9)).toBe(true)
    expect(isPerfectSquareNumber(16)).toBe(true)
    expect(isPerfectSquareNumber(25)).toBe(true)
  })

  it('should return false for non-perfect squares', () => {
    expect(isPerfectSquareNumber(2)).toBe(false)
    expect(isPerfectSquareNumber(3)).toBe(false)
    expect(isPerfectSquareNumber(5)).toBe(false)
    expect(isPerfectSquareNumber(10)).toBe(false)
  })

  it('should return false for negative numbers', () => {
    expect(isPerfectSquareNumber(-4)).toBe(false)
  })
})

