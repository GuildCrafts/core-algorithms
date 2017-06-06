export default function setSymmetricDifference({}) {

//setSymmetricDifference

//Return the symmetric difference of two sets.

//const a = [1, 2, 3, 4]
//const b = [2, 4, 6, 8]
//setSymmetricDifference(a, b)
// => [1, 3, 6, 8]


 setSymmetricDifference (a,b) => {
    let ans = [], cnts = {};
    for (let i = 0; i < arguments.length; i++){
        arguments[i].forEach(function(item) {
            if (cnts.hasOwnProperty(item)) {
                // increase cnt
                ++cnts[item].cnt;
            } else {
                // initalize cnt and value
                cnts[item] = {cnt: 1, val: item};
            }
        });
    }
    for (let item in cnts) {
        if (cnts.hasOwnProperty(item) && cnts[item].cnt === 1) {
            ans.push(cnts[item].val);
        }
    }

    return ans;
}
