export default function setIntersection {()} {





/*Return the intersection of two sets.

const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setIntersection(a, b)
// => [2, 4]*/



setIntersection () => {
let  arr = [1, 2, 3, 4]
let b = [2, 4, 6, 8]
setIntersection(a, b)
let sorted_arr = arr.slice().sort();
let results = [];
for (let i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);
