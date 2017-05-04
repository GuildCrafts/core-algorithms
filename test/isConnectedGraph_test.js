import { expect } from 'chai'
import isConnectedGraph from '../src/isConnectedGraph'

describe('isConnectedGraph()', function(){

  it('should be a function', function(){
    expect(isConnectedGraph).to.be.a('function')
  })

  it(
    'returns true when analyzing {}',
    function(){
      const answer = isConnectedGraph({
      })
      expect(answer).to.be.true
    }
  )

  it(
    'returns true when analyzing {"a": []}',
    function(){
      const answer = isConnectedGraph({"a": []})
      expect(answer).to.be.true
    }
  )

  it(
    'returns true when analyzing {"a": ["b"], "b": ["a"]}',
    function(){
      const answer = isConnectedGraph({"a": ["b"], "b": ["a"]})
      expect(answer).to.be.true
    }
  )

  it(
    'returns false when analyzing {"a": [], "b": []}',
    function(){
      const answer = isConnectedGraph({"a": [], "b": []})
      expect(answer).to.be.false
    }
  )

  it(
    'returns false when analyzing {"a": ["b"], "b": ["a"], "c": []}',
    function(){
      const answer = isConnectedGraph({"a": ["b"], "b": ["a"], "c": []})
      expect(answer).to.be.false
    }
  )

  it(
    'returns true when analyzing {"a": ["b"], "b": ["a", "c"], "c": ["b"]}',
    function(){
      const answer = isConnectedGraph({"a": ["b"], "b": ["a", "c"], "c": ["b"]})
      expect(answer).to.be.true
    }
  )

  it(
    'returns true when analyzing {"a": ["b", "c"], "b": ["a", "c"], "c": ["a", "b"]}',
    function(){
      const answer = isConnectedGraph({"a": ["b", "c"], "b": ["a", "c"], "c": ["a", "b"]})
      expect(answer).to.be.true
    }
  )

  it(
    'returns undefined when analyzing {"a": ["b", "c"], "b": ["a", "c", "d"], "c": ["a", "b"]}',
    function(){
      const answer = isConnectedGraph({"a": ["b", "c"], "b": ["a", "c", "d"], "c": ["a", "b"]})
      expect(answer).to.be.undefined
    }
  )

  it(
    'returns undefined when analyzing {"a": ["b", "c"], "b": ["a", "b", "c"], "c": ["a", "b"]}',
    function(){
      const answer = isConnectedGraph({"a": ["b", "c"], "b": ["a", "b", "c"], "c": ["a", "b"]})
      expect(answer).to.be.undefined
    }
  )

  it(
    'returns undefined when analyzing {"a": ["b", "c"], "b": "nothing", "c": ["a", "b"]}',
    function(){
      const answer = isConnectedGraph({"a": ["b", "c"], "b": "nothing", "c": ["a", "b"]})
      expect(answer).to.be.undefined
    }
  )

})
