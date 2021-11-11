/* Exercise 1
Write a function which returns the sum of all the odd numbers in an array (the odd number values, not the odd indexes). Calling the function would look like this:
console.log(oddNumberSum([1,2,3,4,5])); // 1 + 3 + 5 = 9, so should output 9
console.log(oddNumberSum([2,4,6,8])); // no odd numbers, so should output 0
console.log(oddNumberSum([1,3,5,7])); // 1 + 3 + 5 + 7 = 16, so should output 16
 */

function oddNumberSum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        } else {
            sum += 0;
        }
    } return sum;
}

console.log(oddNumberSum([1,3,5,7]));