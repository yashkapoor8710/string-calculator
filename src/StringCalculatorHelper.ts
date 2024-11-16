// add.ts (Extended)
export function add(numbers: string): number {
  if (!numbers) return 0;

  const delimiterRegex = /^\/\/(.+)\n/;
  let delimiter = ",";
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const match = numbers.match(delimiterRegex);
    if (match) {
      delimiter = match[1];
      numberString = numbers.substring(match[0].length);
    }
  }

  const numbersArray = numberString
    .split(new RegExp(`[${delimiter}\n]`))
    .map(Number);

  const negativeNumbers = numbersArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numbersArray.reduce((sum, num) => sum + num, 0);
}
