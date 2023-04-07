// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {
  it("returns a an array of fibonacci numbers the same length of the input", () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const fibLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
//Pseudocode:
//Input:A number that is greater than 2
//output:An array that is the same length of the input number.
//create a function called fibonnaci that takes in a number.
//create a variable in function with an empty array to hold numbers generated that starts a [1,1] like every fibonacci sequence.
//create a for loop that iterates through the newArray starting at the second index though the value of the number input in increments of 1.
//use .push to move the added two previous numbers into the newArray.
//return newArray
//
//
const fibonacci = (number) => {
  let newArray = [1, 1]
  for (let i = 2; newArray.length < number; i++) {
    newArray.push(newArray[i - 1] + newArray[i - 2])
  }
  return newArray
}
console.log(fibonacci(fibLength1))

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-3-assessment-FLopez73/node_modules/.bin/jest
//   console.log
//     [ 1, 1, 2, 3, 5, 8 ]

//       at Object.log (code-challenges.test.js:44:9)

//  PASS  ./code-challenges.test.js
//   fibonacci
//     ✓ returns a an array of fibonacci numbers the same length of the input (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.776 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("lowToHigh", () => {
  it("returns an array from the key pair value of the object in low to high order", () => {
    expect(lowToHigh(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(lowToHigh(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60,
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65,
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
//Pseudocode:
// input: Object
// output: an array of numbers in order of low to high.
// decalre a function that is called lowToHigh that will take an object as an argument.
//declare a variable numsArray to extract the values of the object using Object.values() method that clones them into an array.
//sort through the numsArray with .sort method using a comparison function to organize in ascending order.
// return numsArray that is sorted.

const lowToHigh = (object) => {
  let numsArray = Object.values(object)
  numsArray.sort((a, b) => a - b)
  return numsArray
}

console.log(lowToHigh(studyMinutesWeek2))
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-3-assessment-FLopez73/node_modules/.bin/jest
//   console.log
//     [
//       10, 15,  20, 45,
//       60, 65, 100
//     ]

//       at Object.log (code-challenges.test.js:115:9)

//  PASS  ./code-challenges.test.js
//   lowToHigh
//     ✓ returns an array from the key pair value of the object in low to high order (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.449 s
// Ran all test suites.
// ✨  Done in 1.51s.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("addedNums", () => {
  it("returns an array of the same length with values of the acummulating sum", () => {
    expect(addedNums(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(addedNums(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(addedNums(accountTransactions3)).toEqual([])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
//pseudocode:
//input: Array
//output: Array with numbers of the accumulating sum of original values.
//create a function called addedNums that will map over the input array.
//using .map method to iterarte over each value in the array.

// I had to look online for help on how to add the values in the array while .map was iterating and found it on stack overflow
// then in turn found out about needing to declare a variable to store the running count of the sum.
//(https://stackoverflow.com/questions/20477177/creating-an-array-of-cumulative-sum-in-javascript)

const addedNums = (array) => {
  let sum = 0
  return array.map((value) => (sum += value))
}
console.log(addedNums(accountTransactions1))
// PASS  ./code-challenges.test.js
// addedNums
//   ✓ returns an array of the same length with values of the acummulating sum (4 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.476 s, estimated 2 s
// Ran all test suites.
// ✨  Done in 2.47s.
