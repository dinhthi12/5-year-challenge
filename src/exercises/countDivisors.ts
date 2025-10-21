/**
 * Count the number of "divisors" of the positive integer n
 */

export function countDivisors(n: number): number {
  let count = 0

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      count++
      if (i !== n / i) {
        count++
      }
    }
  }

  return count
}
