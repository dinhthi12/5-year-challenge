/**
 * Find the largest odd divisor of the positive integer n. For example, n = 100 largest odd divisor is 25
 */

export function largestOddDivisor(n: number): number {
  /**
   * If n is odd → it is the largest odd divisor.
   * If n is even → divide by 2 continuously until it becomes an odd number → it is the largest odd divisor.
    (Essentially, it eliminates all divisors of 2 in prime factorization).
  */
  while (n % 2 === 0) {
    n = Math.floor(n / 2)
  }

  return n
}
