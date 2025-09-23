import { twoSum } from '../twosum';

describe('two sum function', () => {
  test('Case 1: finds indices for [2,7,11,15], target = 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('Case 2: finds indices for [3,2,4], target = 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('Case 3: finds indices for [3,3], target = 6', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('Case 4: returns [] if no solution exists', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
