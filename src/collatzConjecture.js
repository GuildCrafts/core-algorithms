export default function collatzConjecture(n) {
  var sequence = [];
  sequence.push(n);
  if (typeof n === 'string' || n < 0 || n % 1 !== 0) {
    return "Invalid entry, please enter a positive integer";
  } else {
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = (n*3) + 1;
    }
    sequence.push(n);
  }
}
  return sequence;
};

module.exports = collatzConjecture
