export function isValid(s: string): boolean {
  let stack: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      // Push opening brackets
      stack.push(s[i]!)
    } else {
      // Pop last opening
      let top = stack.pop()

      if ((s[i] == ')' && top !== '(') || (s[i] == ']' && top !== '[') || (s[i] == '}' && top !== '{')) {
        return false
      }
    }
  }

  // If stack is empty -> valid
  return stack.length === 0
}
