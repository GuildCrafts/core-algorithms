export default function setUnion(a, b) {
  const unionElements = [ ...elements ]
  otherSet.members().forEach( element => {
    if( ! unionElements.includes( element ) ) {
      unionElements.push( element )
    }
  })

  // return a new set created from those elements
  return [ ...unionElements ]
}


}
