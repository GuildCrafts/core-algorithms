export default function setUnion(a, b) {
  //code here
  if (!Array.isArray(a)) throw new Error('error');
  if (!Array.isArray(b)) throw new Error('error');

  let sorted = (a.concat(b)).sort();
  for (let i  = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      sorted.splice(i, 1);
      i = i - 1;
    }
  }
  return sorted;
}
