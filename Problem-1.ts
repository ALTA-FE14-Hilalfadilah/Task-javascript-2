function pairWithTargetSum(arr: number[], targetSum: number): [number, number] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairWithTargetSum([2, 5, 9, 11], 11));
console.log(pairWithTargetSum([1, 3, 5, 7], 12));
console.log(pairWithTargetSum([1, 4, 6, 8], 10));
console.log(pairWithTargetSum([1, 5, 6, 7], 6));
