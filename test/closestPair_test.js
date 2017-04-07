import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()' , function () {

	it('should return postion of a given number in an array', function() {
	 	const points = [[2,1],[4,0],[-1,0],[5,3],[-2,5],[3,-3],[-2,0],[3,4],[5,-4], [0,-2]]
	 	expect (closestPair(points)).to.be.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })

	})

	it('return an error if searched number is not an integer', function() {
	 	const points = [[5, 7], [-2, 0], [5, -3], [-3, 4], [2, -6]]
	 	expect (closestPair(points)).to.be.deep.equal({ pair: [ [ -2, 0 ], [ -3, 4 ] ], distance: 5 })

	})

	it('should return error if array is not an object', function() {
	 	const points = 'str'
	 	expect (closestPair(points)).to.be.equal('error')

	})

})
