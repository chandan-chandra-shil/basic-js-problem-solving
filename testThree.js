// Problem 4: Finding Bad data
// তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”.
// এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
// Sample Input & Output:-

// Input: [ 1,2,5
// Output: 0

// Input: [ 2, -5, -7, -13 ]
// Output: 3


function findingBadData(array) {
  let badDataCount = 0;
  for (let i = 0; i < array.length; i++){
    const element = array[i];
    if (element < 0)
      badDataCount = badDataCount + 1;

  }
  return badDataCount;
}
let badDataCountResult = findingBadData[2, -5, -7, -13];
console.log(badDataCountResult);