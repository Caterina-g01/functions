function capitalizeFirstLatter(word: string) {
  console.log(word[0].toUpperCase() + word.slice(1));
}
capitalizeFirstLatter("hello");

// каждое слово с большой буквы
function capitalizeFirstLetterOfEachWord(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetterOfEachWord("hello world"));
