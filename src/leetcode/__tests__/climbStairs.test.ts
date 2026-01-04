import { climbStairs } from '../climbStairs'

describe('Climb stairs', () => {
  test('n = 0 → 1 way', () => {
    expect(climbStairs(0)).toBe(1)
  })

  test('n = 1 → 1 way', () => {
    expect(climbStairs(1)).toBe(1)
  })

  test('n = 2 → 2 ways', () => {
    expect(climbStairs(2)).toBe(2)
  })

  test('n = 3 → 3 ways', () => {
    expect(climbStairs(3)).toBe(3)
  })

  test('n = 4 → 5 ways', () => {
    expect(climbStairs(4)).toBe(5)
  })

  test('n = 5 → 8 ways', () => {
    expect(climbStairs(5)).toBe(8)
  })

  test('n = 10 → 89 ways', () => {
    expect(climbStairs(10)).toBe(89)
  })
})
