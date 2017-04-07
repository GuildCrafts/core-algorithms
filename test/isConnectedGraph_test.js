import { expect } from 'chai'
import isConnectedGraph from '../src/isConnectedGraph'

describe('isConnectedGraph()', function() {

	it('should return true if the graph is connected', function(){
		const graphA = {
			'a': ['b', 'c'],
  			'b': ['a', 'd'],
  			'c': ['a', 'd'],
  			'd': ['b', 'c'],
		}
		expect(isConnectedGraph(graphA)).to.be.equal(true)
	})

	it('should return false if the graph is not connected', function(){
		const graphB = {
  			'a': ['b'],
  			'b': ['a'],
  			'c': ['d'],
  			'd': ['c'],
		}
		expect(isConnectedGraph(graphB)).to.be.equal(false)
	})

	it('should return an error when anything but an object is given', function() {
		const output = "str"
		expect(isConnectedGraph(output)).to.equal("error")
	})

})
