# Testing for valid and invalid inputs

### Positive and negative unit testing

Positive testing demonstrates that software is behaving correctly when given valid inputs.

Negative testing demonstrates that software is behaving correctly when given invalid inputs.

Both positive and negative testing are equally important. If you disregard a test where entering a string should throw an error, the acceptance of this invalid input may cause problems elsewhere within your code.

#### Test example

Let's say you want to accept numbers within a specified range to manipulate in some way. The function to capture and validate input could be as follows:

```
function acceptNumberInRange( input, lowerBoundary, upperBoundary ) {
  if ( typeof( input ) === 'number' ) {
    if ( input < lowerBoundary || input > upperBoundary ) {
      throw new Error( 'Number entered is out of range' )
    }
    else {
      return input
    }
  }
  throw new Error( 'Input is not a number' )
}
```

Use the function above to enter a number between 1 and 100:

```acceptNumberInRange( 5, 1, 100 )``` //Test passes

```acceptNumberInRange( 99, 1, 100 )``` //Test passes

```acceptNumberInRange( 111, 1, 100 )``` //Test fails

```acceptNumberInRange( 'hello', 1, 100 )``` //Test fails

Using a Mocha/Chai framework, the test would resemble the following:

```
describe( '#acceptNumberInRange', function() {

  context( 'when the input is a number within the given range', function() {
    it( 'should return the input value', function() {
      expect( acceptNumberInRange( 5, 1, 100 ) ).to.equal( 5 )
      expect( acceptNumberInRange( 99, 1, 100 ) ).to.equal( 99 )
    })
  })

  context( 'when the input is not within range', function() {
    it( 'should throw a \'Number entered is out of range\' error', function() {
      expect( function() { acceptNumberInRange( 111, 1, 100 )} ).to.throw( Error, 'Number entered is out of range')
    })
  })

  context( 'when the input is not a number', function() {
    it( 'should throw a \'Input is not a number\' error', function() {
      expect( function() { acceptNumberInRange( 'hello', 1, 100 ) }).to.throw( Error, 'Input is not a number' )
    })
  })
})
  ```

  Using the acceptNumberInRange(), you could also validate the lower and upper bounds.
