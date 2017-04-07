export default function setCompliment(a, b){

  let outputArr = [];
  let uniqueb = Array.from(new Set(b));
  for (let i = 0; i < uniqueb.length; i++ ){
    let pass = true;
    for (let j = 0; j < a.length; j++){
      if (uniqueb[i] === a[j]){
        pass = false;
      }
    }
    if(pass){
      outputArr.push(uniqueb[i]);
    }
  }
  return outputArr;

}
