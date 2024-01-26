function hasTargetSum(array, target) {
  let retVal = false;
  // Create for loop to check if pair condition is true or false. (We do not need to iterate last index)
  for(let i= 0; i <= array.length - 2; i++) {
    // Subtract from target, remove current index, and check for the pair.
    let checkNumber = target - array[i];
    let tempArr = [...array];
    tempArr.splice(i, 1)
    if(tempArr.includes(checkNumber)) {
      retVal = true;
      break;
    }
  }
  return retVal;
}

/* 
  o(n^2) due to the for loop and the tempArr.includes();
*/

/* 
  Create for loop to check if pair condition is true or false. (We do not need to iterate last index)
    Subtract from target, remove current index, and check for the pair.
    If pair, return true, if not, return false.
*/

/*
  I create a variable that will return a boolean after the array is checked. The for loop will begin iterating through the passed array and can check all index positions 
  except for the last one. Each number will be subtracted from the target and the array will be checked for a matching pair using array method .includes(). If the pair exists, break
  out of the for loop and return true. I also added a .splice for the current index to check for pairs, otherwise, the check will return true on the 'checkNumber' variable itself.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 1, 12, 5, 10, 6], 13));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 17, 8, 3, 2], 21));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 9, 10, 4, 12, 9], 11));

  console.log("");

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
