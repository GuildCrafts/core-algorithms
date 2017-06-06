import { expect } from 'chai'
import factorial from '../123/factorial'

/*describe( 'factorial()' , function(){

it(' should be a function ', function(){
expect ( factorial ).to.be.a('function')
	})
})*/

 
 describe( 'factorial()', function(){
 
   it( 'should be a function', function(){
     expect( factorial ).to.be.a( 'function' )
   })
   it( 'returns the factorial of a given number', function(){
     expect( factorial(5)).to.equal( 120 )
   })
   it( 'returns the factorial of a given number', function(){
     expect( factorial(7)).to.equal( 5040 )
   })
   it( 'only operates on a valid input', function(){
     expect( factorial('5')).to.equal( 'Please provide a valid number.' )
   })
   it( 'only operates on a valid input', function(){
     expect( factorial([5])).to.equal( 'Please provide a valid number.' )
   })
 })