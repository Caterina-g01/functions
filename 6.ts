const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateArithmeticMean(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const mean = sum / arr.length;
  return mean;
}

console.log(calculateArithmeticMean(numbersArr));

// не очень поняла, что значит "числа в списке", сделала массив чисел
