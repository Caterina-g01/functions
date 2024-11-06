const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getMinMax(arr: number[]): { min: number; max: number } {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
const minMaxValues = getMinMax(numbersArray);
console.log(minMaxValues);
