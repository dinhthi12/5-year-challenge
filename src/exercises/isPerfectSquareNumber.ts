/**
 *  Given a positive integer n. Check if n is a perfect square number or not
 */

export function isPerfectSquareNumber(n: number): boolean {
  if (n >= 0) {
    let sr = Math.floor(Math.sqrt(n))

    return sr * sr === n
  }

  return false
}
