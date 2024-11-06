function isPalindrome(word: string): boolean {
  const cleanedWord = word.toLowerCase().replace(/\s+/g, "");
  const reversedWord = cleanedWord.split("").reverse().join("");
  return cleanedWord === reversedWord;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
