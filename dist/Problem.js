const concatenateArrays = (...array) => {
    return array.flat();
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
export {};
