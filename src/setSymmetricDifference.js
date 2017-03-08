export default function setSymmetricDifference(a, b){

  a = Array.from(new Set(a));
  b = Array.from(new Set(b));
  
  let outputArr = []
  for (let i = 0; i < a.length; i++){
    let pass = true;
    for (let j= 0; j < b.length; j++){
      if (a[i] === b[j]){
        pass = false;
      }
    }
    if(pass){
      outputArr.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++){
    let pass = true;
    for (let j= 0; j < a.length; j++){
      if (b[i] === a[j]){
        pass = false;
      }
    }
    if(pass){
      outputArr.push(b[i]);
    }
  }

  return outputArr;

}
