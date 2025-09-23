import { maxSubarray, maxSubarrayKadane } from '../maximumsubarray';

describe('Maximum sub array', () => {
  const cases: { input: number[]; expected: number }[] = [
    { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 }, //bf 4ms
    { input: [-5, -2, -8, -1], expected: -1 },
    { input: [1, 2, 3, 4], expected: 10 },
    { input: [7], expected: 7 },
    { input: [5, -2, 3, 4], expected: 10 },
  ];

  describe('Brute Force', () => {
    test.each(cases)('nums=%j => %d', ({ input, expected }) => {
      expect(maxSubarray(input)).toEqual(expected);
    });
  });

  describe("Kadane's Algorithm", () => {
    test.each(cases)('nums=%j => %d', ({ input, expected }) => {
      expect(maxSubarrayKadane(input)).toEqual(expected);
    });
  });
});
