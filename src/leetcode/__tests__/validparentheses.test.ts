import { isValid } from './../validparentheses'

describe('is Valid parentheses', () => {
  it('should return true for valid parentheses', () => {
    expect(isValid('()')).toBe(true)
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('{[()]}')).toBe(true)
    expect(isValid('({[]})')).toBe(true)
  })

  it('should return false for invalid parentheses', () => {
    expect(isValid('(]')).toBe(false)
    expect(isValid('([)]')).toBe(false)
    expect(isValid('(((')).toBe(false)
    expect(isValid('({[})')).toBe(false)
  })

  it('should handle empty string', () => {
    expect(isValid('')).toBe(true)
  })
})
