# Installation and Setup

Installing your dependencies from the package.json file using ```npm install```

## Usage and Examples

### Factorial

Returns factorial of number passed in

```
let multiplyNumbers = []

for (let i = input; i > 1; i--) {
	multiplyNumbers.push(i)
}
return multiplyNumbers.reduce(function(a, b) {return a * b})
}
```

### Factorial Testing

```
import { expect } from 'chai'
import factorial from '../src/factorial'

describe.only('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns factorial of number passed in', function(){
    expect(factorial(5)).to.deep.equal(120)
    expect(factorial(10)).to.deep.equal(3628800)
  })
})
```


# Core Algorithms [Classic, Numeric, Set]

- [x] Artifact produced is a fork of the [core-algorithms][core-algorithms] repo.
- [x] Can run all tests with npm test.
- [x]  ```makeChange()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```makeChange()``` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x]  ```fizzBuzz()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```fizzBuzz()``` exist.
- [x]  ```isPalindrome()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```isPalindrome()``` exist with at least 2 unit tests using valid inputs.
- [x]  ```factorial()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```factorial()``` exist with at least 2 unit tests using valid inputs.
- [x]  ```fibonacci()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```fibonacci()``` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x]  ```collatzConjecture()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```collatzConjecture()``` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x]  ```setUnion()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```setUnion()``` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x]  ```setIntersection()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```setIntersection()``` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x]  ```setComplement()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```setComplement()``` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x]  ```setSymmetricDifference()``` algorithm is implemented according to the description in algorithms.md.
- [x]  Tests for ```setSymmetricDifference()``` exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x]  Repository includes a README file with basic installation and setup instructions.
- [x]  All dependencies are properly declared in package.json.
- [x]  All major features are added via pull requests with a clear description and concise commit messages.
- [x]  Code uses a linter and there are no linting errors.
- [x]  Variables, functions, files, etc. have appropriate and meaningful names.
- [x]  Functions are small and serve a single purpose.
- [x]  The artifact produced is properly licensed, preferably with the [MIT license][mit-license].
