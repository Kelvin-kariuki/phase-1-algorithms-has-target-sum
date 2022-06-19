function hasTargetSum(array, target) {
  // Write your algorithm here
  // const array = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < array.length; index++) {
  // const element = array[index];
  // for (let a = index + 1; a=  < array.length; a++) {
  //   // const element = array[q= ];
  // }
for ( let a = index +1; a < array.length; a++){
  if (array[a] + array[index] == target) {
    return true;
  }
}
  
}
// if not target then return false
return false;

}

/* 
  Write the Big O time complexity of your function here
0(n*2)
  */

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
