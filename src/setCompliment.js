export default function setCompliment (a, b){
  const compliment = []

  b.forEach(number => {
    if(a.indexOf(number) === -1)
      compliment.push(number)
  })

  return compliment
}
