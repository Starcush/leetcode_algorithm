/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar1 = function(s) {
  
  for(let i = 0; i < s.length; i++) {
      let reg = new RegExp(s[i], 'g');
      if(s.match(reg).length === 1) {
          return i;
      }
  }
  return -1;
};

var firstUniqChar2 = function(s) {
  let obj = {};
  for(let i = 0; i < s.length; i++) {
      obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
  }
  
  for(let key in obj) {
      if(obj[key] === 1) return s.indexOf(key)
  }
  return -1;
  
};

var firstUniqChar3 = function(s) {
 
  for(let i = 0; i < s.length; i++) {
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
  
};

