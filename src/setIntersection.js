export default function setIntersection(a, b) {

  let unique = Array.from(new Set(a));
  let intersection = [];

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < unique.length; j++) {
      if (b[i] === unique[j]) intersection.push(b[i]);
    }
  }

  let final = Array.from(new Set(intersection));
  return final;
}
