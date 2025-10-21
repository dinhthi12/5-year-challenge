import { oddDivisors } from '../oddDivisors'

describe('odd Divisors', () => {
  test('Case 1: n = 12', () => {
    expect(oddDivisors(12).sort((a, b) => a - b)).toEqual([1, 3])
  })

  test('Case 2: n = 15', () => {
    expect(oddDivisors(15).sort((a, b) => a - b)).toEqual([1, 3, 5, 15])
  })

  test('Case 3: n = 36', () => {
    expect(oddDivisors(36).sort((a, b) => a - b)).toEqual([1, 3, 9])
  })

  test('Case 4: n = 1', () => {
    expect(oddDivisors(1)).toEqual([1])
  })

  test('Case 5: n = 2', () => {
    expect(oddDivisors(2)).toEqual([1])
  })
})
