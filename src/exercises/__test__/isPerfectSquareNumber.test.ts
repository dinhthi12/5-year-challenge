import { isPerfectSquareNumber } from '../isPerfectSquareNumber'

describe('Is perfect square number', () => {
  it('Should return true for perfect squares', () => {
    expect(isPerfectSquareNumber(1)).toBe(true)
    expect(isPerfectSquareNumber(4)).toBe(true)
    expect(isPerfectSquareNumber(9)).toBe(true)
    expect(isPerfectSquareNumber(16)).toBe(true)
    expect(isPerfectSquareNumber(25)).toBe(true)
  })

  it('Should return false for non-perfect squares', () => {
    expect(isPerfectSquareNumber(2)).toBe(false)
    expect(isPerfectSquareNumber(3)).toBe(false)
    expect(isPerfectSquareNumber(5)).toBe(false)
    expect(isPerfectSquareNumber(10)).toBe(false)
  })

  it('Should return false for negative numbers', () => {
    expect(isPerfectSquareNumber(-4)).toBe(false)
  })
})

