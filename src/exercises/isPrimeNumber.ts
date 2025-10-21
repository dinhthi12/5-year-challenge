/**
 * Given a positive integer n. Check if n is prime or not
 */

export function isPrimeNumber(n: number): boolean {
  if (n < 2) return false

  for (let i = 2; i * i <= n; i++) {

    if (n % i === 0) return false
  }
  return true
}
