// Function to find two indices in nums such that their sum equals target
export function twoSum(nums: number[], target: number): number[] {
  // Create a Map to store (value -> index)
  const map = new Map<number, number>()

  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach target
    const complement = target - nums[i]!

    // If the complement already exists in the map → solution found
    if (map.has(complement)) {
      // Return indices: [index of complement, current index]
      return [map.get(complement)!, i]
    }

    // Otherwise, store the current number with its index
    // key: nums[i], value: i
    map.set(nums[i]!, i)
  }

  // If no pair is found, return an empty array
  return []
}
