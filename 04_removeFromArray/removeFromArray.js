const removeFromArray = function(arr, ...numbersToRemove) {
  const result = arr.filter((el) => !numbersToRemove.includes(el));
  return result;
};

/* I can just return it directly without declaring a variable */

// Do not edit below this line
module.exports = removeFromArray;
