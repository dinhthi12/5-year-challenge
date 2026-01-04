import { getDivisors } from '../getDivisors'

describe('Get divisors', () => {
  test('Case 1: Divisors of 1', () => {
    expect(getDivisors(1)).toEqual([1])
  })

  test('Case 2: Divisors of 6', () => {
    expect(getDivisors(6)).toEqual([1, 2, 3, 6])
  })

  test('Case 3: Divisors of 12', () => {
    expect(getDivisors(12)).toEqual([1, 2, 3, 4, 6, 12])
  })
})
