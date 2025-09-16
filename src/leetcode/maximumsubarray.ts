export function maxSubarray(nums: number[]): number {
  //brute force
  let maxSum = -Infinity;
  for(let i = 0; i < nums.length; i++){
    let currentSum = 0;
    for(let j = i; j < nums.length; j++){
      currentSum += nums[j]!;
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

export function maxSubarrayKadane(nums: number[]): number {
  let maxSum = nums[0]!;
  let currentSum = nums[0]!;

  for (let i = 1; i < nums.length; i++){
    // choose: start new subarray at nums[i] or continue accumulating
    currentSum = Math.max(nums[i]!, currentSum + nums[i]!);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}