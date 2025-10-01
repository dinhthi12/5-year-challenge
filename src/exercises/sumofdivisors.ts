/**
 * Calculate the sum of all "divisors" of the positive integer n
 */

export function sumOfDivisors(n: number): number {
  let arrDivisors: number[] = []

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      arrDivisors.push(i)
      if (i !== n / i) {
        arrDivisors.push(n / i)
      }
    }
  }

  let sum: number = arrDivisors.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return sum
}
