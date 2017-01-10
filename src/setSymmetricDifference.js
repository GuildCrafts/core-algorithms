
  export default function setSymmetricDifference(a, b) {
  let setDifference = [];

  for (let i = 0; i < a.length; i++)  {
    if (b.indexOf(a[i]) === -1) {
      setDifference.push(a[i]);
    }
  }
    return setDifference;
  }
