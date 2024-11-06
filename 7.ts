function cleanString(string: string): string {
  return string.replace(/\s+/g, "");
}
console.log(cleanString("h e l l o"));
