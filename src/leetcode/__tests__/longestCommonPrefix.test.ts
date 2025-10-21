import { longestCommonPrefix } from '../longestCommonPrefix'

describe('longest common prefix with reduce', () => {
  test('Case 1: flower, flow, flight', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })

  test('Case 2: no common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })

  test('Case 3: identical strings', () => {
    expect(longestCommonPrefix(['test', 'test', 'test'])).toBe('test')
  })

  test('Case 4: empty input', () => {
    expect(longestCommonPrefix([])).toBe('')
  })
})
