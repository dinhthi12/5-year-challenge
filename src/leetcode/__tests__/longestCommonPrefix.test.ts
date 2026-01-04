import { longestCommonPrefix } from '../longestCommonPrefix'

describe('Longest common prefix with reduce', () => {
  test('Case 1: Flower, flow, flight', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })

  test('Case 2: No common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })

  test('Case 3: Identical strings', () => {
    expect(longestCommonPrefix(['test', 'test', 'test'])).toBe('test')
  })

  test('Case 4: Empty input', () => {
    expect(longestCommonPrefix([])).toBe('')
  })
})
