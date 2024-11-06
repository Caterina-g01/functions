function findBiggestNumber(numOne: number, numTwo: number, numThree: number) {
    if ((numOne > numTwo) && (numOne > numThree)) {
      return numOne;
    } else if ((numTwo > numOne) && (numTwo > numThree)) {
      return numTwo;
    } else {
      return numThree;
    }
  }
  
  console.log(`${findBiggestNumber(10, 15, 20)} - наибольшее число из предоставленных чисел`);