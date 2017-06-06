
function fizzBuzz(){
      let empArray = [];
      for(var i = 0; i < 101; i++){
        
        empArray.push([i]);
        if(i % 3 === 0 && i % 5 === 0){
           //console.log("b");
            empArray.splice([i] , 1, "FizzBuzz");
            //empArray.push([i]);
            }
          else if(i % 3 === 0){
            empArray.splice([i] , 1, "Fizz");
            }
            else if(i % 5 === 0){
              empArray.splice([i] , 1, "Buzz");
              } 
           }         
      return empArray;
  
  }  
                

fizzBuzz();


// => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', ...]
