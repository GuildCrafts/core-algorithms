export default function binarySearch( arr, query){
  if( arr == null ){
    return 'Cannot search null'
  }
  if( arr.constructor !== Array ){
    return 'Please use Arrays'
  }

  const splitSearch = (start, end) => {
    var midpoint = Math.round( (end-start)/2 + start)

    if( query === arr[midpoint]){
      return midpoint
    }

    if( query > arr[midpoint] ){
      if( start === end ){
        return 'Not found'
      }
      return splitSearch( midpoint, end )
    } else {
      if( start === end ){
        return 'Not found'
      }
      return splitSearch( start, midpoint-1 )
    }
  }

  return splitSearch(0,arr.length)
}
