/*const useQaurter = function(amountGiven, price) {
    amountGiven = amountGiven - 25
    coins.qaurters++
    return amountGiven

    //console.log(amountGiven)
  } 




  const useDime = function(amountGiven, price) {
    amountGiven = amountGiven - 10
    coins.dimes++
    return amountGiven

    //console.log(amountGiven)
  }



  const useNickel = function(amountGiven, price) {
    amountGiven = amountGiven - 5
    coins.nickels++
    return amountGiven

    //console.log(amountGiven)
  }  



  const usePenny = function(amountGiven, price) {
    amountGiven = amountGiven - 1
    coins.pennies++
    return amountGiven

    //console.log(amountGiven)
  }  

  function makeChange({price, amountGiven}) { 
	  let results = {}
	  if(price === amountGiven) {

	    results.quarters = coins.quarters
	    results.dimes = coins.dimes
	    results.nickels = coins.nickels
	    results.pennies = coins.pennies

	    coins.quarters = 0
	    coins.dimes = 0
	    coins.nickels = 0
	    coins.pennies = 0


    }

    if( difference >= 25 ) {
      amountGiven = takeQuarter(amountGiven, coins)
      return makeChange({price: price, amountGiven: amountGiven})
    }else if( difference >= 10) {
      amountGiven = takeDime(amountGiven, price)
      return makeChange({price: price, amountGiven: amountGiven})
    }else if(difference >= 5){
      amountGiven = takeNickel(amountGiven, price)
      return makeChange({price: price, amountGiven: amountGiven})
    }else if(difference >= 1){
      amountGiven = takePenny(amountGiven, price)
      return makeChange({price: price, amountGiven: amountGiven})
      }
  }
this worked

function makeChange({price, amountGiven}) { 
 
  const coins = {
  // quarters: 0,
  // dimes: 0,
  // nickels: 0,
  pennies: 0,
  }
 
 let difference = amountGiven - price 

  coins.pennies = difference
 return coins

}