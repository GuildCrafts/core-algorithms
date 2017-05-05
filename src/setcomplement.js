export defautl function setComplement ({}) {

}



setComplement

Return the complement of two sets.

const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setComplement(a, b)
// => [6, 8]


  set.complement = (a, b) => {
    return process(a, b, function(freq) {
      return freq === 1;
    });
  };
