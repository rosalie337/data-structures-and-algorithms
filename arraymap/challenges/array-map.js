function map(arr, functionToArray) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = functionToArray(arr[i]);
    }
    return result;
}
// pass a function to map
console.log(map([2, 4, 6, 8], x => x * 2));
// expected output: [4, 8, 12, 16]