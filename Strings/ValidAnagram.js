/*
  Given two strings s and t , write a function to determine if t is an anagram of s.

  Example 1:

  Input: s = "anagram", t = "nagaram"
  Output: true
  Example 2:

  Input: s = "rat", t = "car"
  Output: false
  Note:
  You may assume the string contains only lowercase alphabets.

  link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let arrayS = new Array(26).fill(0);
  let arrayT = new Array(26).fill(0);
  
  for(let i = 0; i < s.length; i++) {
      arrayS[s[i].charCodeAt() - 97]++;
  }
  
  for(let i = 0; i < t.length; i++) {
      arrayT[t[i].charCodeAt() - 97]++;
  }
  
  if(JSON.stringify(arrayS) === JSON.stringify(arrayT)) return true;
  return false;
};