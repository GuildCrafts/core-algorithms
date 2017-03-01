export default function factorial(num){
  if(num > 0){
    var array = [];
    while(num > 0){
      array.push(num);
        num--;}
    return array.reduce(function(a,b){return a*b;});
  }else if(num === 0){
    return 1;
  }else{
    return 'Invalid input';
  }
}
