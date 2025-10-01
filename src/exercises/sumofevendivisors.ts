export function sumOfEvenDivisors(n: number): number {
  let divisors: number[] = []

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i)
      if (i !== n / i) {
        divisors.push(n / i)
      }
    }
  }

  let evenDivisors: number[] = divisors.filter((d) => d % 2 == 0)

  let result: number = evenDivisors.reduce((acc, cur) => acc + cur, 0)

  return result
}
