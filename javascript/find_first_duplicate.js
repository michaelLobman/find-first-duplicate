function findFirstDuplicate(arr) {

  for (let i = 1; i < arr.length + 1; i++) {

    for (let x = i - 1; x > -1; x--) {

      if (arr[i] === arr[x]) {
        return arr[i]

      }
    }
  }
  return -1

}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4, 2]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution


// I want to build a function that iterates through an array and returns the value of
// the first duplicated element. If no element is duplicated, it will return -1

// I need to iterate through an array twice. for each element, it needs to check
// that element against the others...

