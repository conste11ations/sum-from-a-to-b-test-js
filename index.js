
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if ((fromN === toN)) {
    return fromN;
  } else if ((toN - fromN) === 1) {
    return fromN + toN;
  }
  return fromN + toN + sum(fromN + 1, toN - 1);
}

console.log(sum(3, 7));


module.exports = sum;

console.log(module);
