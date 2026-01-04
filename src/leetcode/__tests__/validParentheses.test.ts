import { isValid } from '../validParentheses'

describe('Is Valid parentheses', () => {
  it('Should return true for valid parentheses', () => {
    expect(isValid('()')).toBe(true)
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('{[()]}')).toBe(true)
    expect(isValid('({[]})')).toBe(true)
  })

  it('Should return false for invalid parentheses', () => {
    expect(isValid('(]')).toBe(false)
    expect(isValid('([)]')).toBe(false)
    expect(isValid('(((')).toBe(false)
    expect(isValid('({[})')).toBe(false)
  })

  it('Should handle empty string', () => {
    expect(isValid('')).toBe(true)
  })
})
