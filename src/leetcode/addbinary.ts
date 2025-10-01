export function addBinary(a: string, b: string): string {
  let i = a.length - 1 // start from the end of string a
  let j = b.length - 1 // start from the end of string b
  let result = '' // final binary result
  let carry = 0 // carry when adding

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry // start with carry

    if (i >= 0) {
      sum += Number(a[i]) // add bit at a
      i-- // move left
    }

    if (j >= 0) {
      sum += Number(b[j]) // add bit at b
      j-- // move left
    }

    result = String(sum % 2) + result // take remainder (0 or 1) and attach to the beginning of the result string
    carry = Math.floor(sum / 2) // calculate carry (0 or 1)
  }

  return result
}
