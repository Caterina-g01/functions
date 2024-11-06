const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateSum(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calculateSum(numbers));
