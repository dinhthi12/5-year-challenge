export function oddDivisors(n: number): number[] {
  let divisors: number[] = []

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i)
      if (i !== n / i) {
        divisors.push(n / i)
      }
    }
  }

  return divisors.filter((d) => d % 2 !== 0)
}
