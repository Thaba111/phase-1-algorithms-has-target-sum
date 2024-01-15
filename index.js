function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
 Big O time complexity: O(n^2) 
  (due to nested loops iterating through each pair of numbers in the array)

*/

/* 
  Pseudocode:

  function hasTargetSum(array, target) {
    for each element at index i in array (excluding the last one):
      for each element at index j after i in array:
        if array[i] + array[j] equals target:
          return true
    return false
*/

/*
  Add written explanation of your solution here
   The function hasTargetSum iterates through each pair of numbers in the input array using two nested loops. It checks if the sum of any pair equals the target. If such a pair is found, the function returns true; otherwise, it returns false. This solution uses a brute-force approach to find a matching pair.

  Note: This solution is not optimal from a time complexity standpoint, but it provides a working solution. It can be further optimized using more advanced algorithms for better performance, especially with larger datasets.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
