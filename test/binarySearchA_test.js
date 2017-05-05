import { expect } from 'chai'
import binarySearchA from '../src/binarySearchA'

describe('binarySearchA()', function(){

  it('should be a function', function(){
    expect(binarySearchA).to.be.a('function')
  })

  it('returns 4 when searching [-44, 11.1, 30, 99.99, 100.0, 202] for 100', function(){
    const index = binarySearchA(100, [-44, 11.1, 30, 99.99, 100.0, 202])
    expect(index).to.be.equal(4)
  })

  it('returns undefined when searching [-44, 11.1, 30, 99.99, 100.0, 202] for 99.9', function(){
    const index = binarySearchA(99.9, [-44, 11.1, 30, 99.99, 100.0, 202])
    expect(index).to.be.undefined
  })

  it('returns 0 when searching [100, 202] for 100', function(){
    const index = binarySearchA(100, [100, 202])
    expect(index).to.be.equal(0)
  })

  it('returns 1 when searching [100, 202] for 202', function(){
    const index = binarySearchA(202, [100, 202])
    expect(index).to.be.equal(1)
  })

  it('returns 1 when searching [100, 202] for 202.0', function(){
    const index = binarySearchA(202, [100, 202.0])
    expect(index).to.be.equal(1)
  })

  it('returns 0 when searching [100.0, 202] for 100', function(){
    const index = binarySearchA(100, [100.0, 202])
    expect(index).to.be.equal(0)
  })

  it('returns undefined when searching [100, 202] for 99', function(){
    const index = binarySearchA(99, [100, 202])
    expect(index).to.be.equal(undefined)
  })

  it('returns 0 when searching [-1] for -1', function(){
    const index = binarySearchA(-1, [-1])
    expect(index).to.be.equal(0)
  })

  it('returns undefined when searching [-1] for 1', function(){
    const index = binarySearchA(1, [-1])
    expect(index).to.be.undefined
  })

  it('returns undefined when searching [] for 0', function(){
    const index = binarySearchA(0, [])
    expect(index).to.be.undefined
  })

  it('returns undefined when searching [5, 4, 3, 2] for 0', function(){
    const index = binarySearchA(0, [5, 4, 3, 2])
    expect(index).to.be.undefined
  })

  it('returns undefined when searching [5, 4, 3, 2] for 4', function(){
    const index = binarySearchA(4, [5, 4, 3, 2])
    expect(index).to.be.undefined
  })

  it('returns undefined when searching [-44, 11.1, 30, 99.99, 100.0, "202"] for 100', function(){
    const index = binarySearchA(100, [-44, 11.1, 30, 99.99, 100.0, "202"])
    expect(index).to.be.equal(4)
  })

})
