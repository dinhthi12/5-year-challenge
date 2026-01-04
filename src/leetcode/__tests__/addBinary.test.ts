import { addBinary } from '../addBinary'

describe('Add binary', () => {
  test('Case 1: Simple add', () => {
    expect(addBinary('1', '1')).toEqual('10')
  })

  test('Case 2: Different lengths', () => {
    expect(addBinary('11', '1')).toEqual('100')
  })

  test('Case 3: : Longer numbers', () => {
    expect(addBinary('1010', '1011')).toEqual('10101')
  })

  test('Case 4: One side empty', () => {
    expect(addBinary('101', '')).toEqual('101')
    expect(addBinary('', '111')).toEqual('111')
  })
})
