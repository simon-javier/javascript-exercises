const reverseString = function(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.unshift(string.charAt(i));
  }
  return arr.join("");
};

/* My solution seems to be slower than the actual solution because my lack of
   knowledge in javascript. I should work more on mastering this language.*/

// Do not edit below this line
module.exports = reverseString;
