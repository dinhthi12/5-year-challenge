export function sumOfDivisorsSmallerN(n: number): number {
  let result = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      if (i < n) result += i;
      if (i !== n / i && n / i < n) {
        result += n / i;
      }
    }
  }

  return result;
}
