/*

  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

  Note: For the purpose of this problem, we define empty string as valid palindrome.

  Example 1:

  Input: "A man, a plan, a canal: Panama"
  Output: true
  Example 2:

  Input: "race a car"
  Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let newStr = s.replace(/[^A-Za-z0-9]/g, '').replace(/[A-Z]/g, function(match) {
      return match.toLowerCase();
  });
  let pointer1 = 0;
  let pointer2 = newStr.length - 1;
  while(pointer1 <= pointer2) {
      if(newStr[pointer1] === newStr[pointer2]) {
          pointer1++;
          pointer2--;
      } else {
          return false;
      }
  }
  return true;
};