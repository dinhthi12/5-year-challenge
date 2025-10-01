/**
 * Calculate the product of all "odd divisors" of the positive integer n
 */

export function productOfOddDivisors(n: number): number {
  let divisors: number[] = []

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i)
      if (i !== n / i) {
        divisors.push(n / i)
      }
    }
  }

  let oddDivisors: number[] = divisors.filter((d) => d % 2 !== 0)

  let result: number = oddDivisors.reduce((acc, cur) => acc * cur, 1)

  return result
}
