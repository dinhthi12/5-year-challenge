export function maxProfit(prices: number[]): number {
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[i]! - prices[j]!
      maxProfit = Math.max(profit, maxProfit)
    }
  }
  return maxProfit
}

export function maxProfitOptimize(prices: number[]): number {
  let minPrice = Infinity
  let maxProfit = 0

  for (let price of prices) {
    minPrice = Math.min(minPrice, price)
    maxProfit = Math.max(maxProfit, price - minPrice)
  }
  return maxProfit
}
