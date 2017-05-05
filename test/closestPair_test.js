import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()', function(){

  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })

  it(
    'returns [[4, 0], [5, 0]] when analyzing [[4, 0], [5, 0], [5, 2]]',
    function(){
      const closest = closestPair([[4, 0], [5, 0], [5, 2]])
      expect(closest).to.be.deep.equal([[4, 0], [5, 0]])
    }
  )

  it(
    'returns [[4, 0], [5, 0]] when analyzing [[4, 0], [5, 0], [5, 2.6]]',
    function(){
      const closest = closestPair([[4, 0], [5, 0], [5, 2.6]])
      expect(closest).to.be.deep.equal([[4, 0], [5, 0]])
    }
  )

  it(
    'returns [[5, 0], [4, 0]] when analyzing [[5, 0], [4, 0], [5, 2]]',
    function(){
      const closest = closestPair([[5, 0], [4, 0], [5, 2]])
      expect(closest).to.be.deep.equal([[5, 0], [4, 0]])
    }
  )

  it(
    'returns [[5, 0], [4, 0]] when analyzing [[5, 0], [4, 0]]',
    function(){
      const closest = closestPair([[5, 0], [4, 0]])
      expect(closest).to.be.deep.equal([[5, 0], [4, 0]])
    }
  )

  it(
    'returns [[5, 6.5], [5, 6.5]] when analyzing [[5, 6.5], [5, 6.5]]',
    function(){
      const closest = closestPair([[5, 6.5], [5, 6.5]])
      expect(closest).to.be.deep.equal([[5, 6.5], [5, 6.5]])
    }
  )

  it(
    'returns [[5, 6.5], [5, 6.5]] when analyzing [[5, 6.5], [5, 6.5], [5, 6.5]]',
    function(){
      const closest = closestPair([[5, 6.5], [5, 6.5], [5, 6.5]])
      expect(closest).to.be.deep.equal([[5, 6.5], [5, 6.5]])
    }
  )

  it(
    'returns undefined when analyzing [[5, 0]]',
    function(){
      const closest = closestPair([[5, 0]])
      expect(closest).to.be.undefined
    }
  )

  it(
    'returns undefined when analyzing [[5, 0], [6, 7, 8]]',
    function(){
      const closest = closestPair([[5, 0], [6, 7, 8]])
      expect(closest).to.be.undefined
    }
  )

  it(
    'returns undefined when analyzing [[5, 0], 6, 7]]',
    function(){
      const closest = closestPair([[5, 0], 6, 7])
      expect(closest).to.be.undefined
    }
  )

  it(
    'returns undefined when analyzing [[5, 0], [6, "7"]]',
    function(){
      const closest = closestPair([[5, 0], [6, "7"]])
      expect(closest).to.be.undefined
    }
  )

})
