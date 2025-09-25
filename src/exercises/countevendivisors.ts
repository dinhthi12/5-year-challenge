export function countEvenDivisors(n: number): number {
  let count = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      if (i % 2 == 0) {
        count++;
      }
      if (i !== n / i) {
        if ((n / i) % 2 == 0) {
          count++;
        }
      }
    }
  }

  return count;
}
