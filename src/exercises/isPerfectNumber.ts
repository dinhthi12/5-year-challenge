/**
 * Given a positive integer n. Checks whether n is a perfect number or not
 */

export function isPerfectNumber(n: number): boolean {
  if (n <= 1) return false

  let sum = 1

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i
      if (i !== n / i) sum += n / i
    }
  }

  return sum === n
}
