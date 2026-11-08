//* Problem 1:
const multiplyValue = (a: number, b?: number): number => {
  if (b === undefined) {
    return a * 2;
  }
  return a * b;
};