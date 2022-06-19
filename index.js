function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    const compliment  = target - array[i]; 
    for(let j = i + 1; j < array.length; j++){
      if(array[j] === compliment) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
 // iterate over the array of numbers
  //   for the current number, identify a complementary number that adds to our target
  //   (for example: if our number is 2, and the target is 5, the complementary number is 3)
  //   iterate over the remaining numbers in the array
  //     check if any of the remaining numbers is the complement
  //       if so, return true
  // if we reach the end of the array, return false
}

*/

/*
  Add written explanation of your solution here
  if i go a position in the array e.g 2 and the target is 10 , take 
  10 - 2 and get 8 as our compliment/partner value .
  to find the compliment loop thru the rest of the array i.e
  position2 = position1 + 1, iterate thru
  position2 === our compliment return true else false
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
