const sumAll = function(range1, range2) {
  let totalSum = 0;
  let start = 0, end = 0;

  if (range1 < 0 ||
    range2 < 0 ||
    Math.floor(range1) !== range1 ||
    Math.floor(range2) !== range2 ||
    range1 !== Number(range1) ||
    range2 !== Number(range2)
  ) {
    return "ERROR";
  }

  if (range1 < range2) {
    start = range1;
    end = range2;
  } else {
    start = range2;
    end = range1;
  }
  for (let i = start; i <= end; i++) {
    totalSum += i;
  }
  return totalSum;
};

/*
  🔹 My implementation works but has unnecessary complexity.
  🔹 The actual solution is cleaner, avoids redundant checks, and uses better 
     variable management.
*/

// Do not edit below this line
module.exports = sumAll;
