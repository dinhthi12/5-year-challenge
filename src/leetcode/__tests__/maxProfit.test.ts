import { maxProfitOptimize } from '../maxProfit'

describe('Best Time to Buy and Sell Stock', () => {
  test('Case 1: prices = [7,1,5,3,6,4]', () => {
    expect(maxProfitOptimize([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  test('Case 2: prices = [7,6,4,3,1] (decreasing, no profit)', () => {
    expect(maxProfitOptimize([7, 6, 4, 3, 1])).toBe(0)
  })

  test('Case 3: prices = [1,2,3,4,5] (increasing continuously)', () => {
    expect(maxProfitOptimize([1, 2, 3, 4, 5])).toBe(4) // buy 1, sell 5
  })

  test('Case 4: only 1 day', () => {
    expect(maxProfitOptimize([5])).toBe(0) // cannot sell
  })

  test('Case 5: only 2 days, price increases', () => {
    expect(maxProfitOptimize([1, 10])).toBe(9)
  })

  test('Case 6: only 2 days, price decreases', () => {
    expect(maxProfitOptimize([10, 1])).toBe(0)
  })
})
