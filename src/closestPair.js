export default function closestPair(points){

  let distance1 = Infinity;
  let outputArr = [[],[]];

  let counter = 0;
  while(counter<points.length-1){
    for (let i = counter+1; i<points.length; i++){
      if((Math.abs(points[counter][0]-points[i][0])+Math.abs(points[counter][1]-points[i][1]))<distance1){
        outputArr[0] = [points[counter][0], points[counter][1]];
        outputArr[1] = [points[i][0], points[i][1]];
        distance1 = Math.abs(points[counter][0]-points[i][0])+Math.abs(points[counter][1]-points[i][1]);
      }
    }
    counter++;
  }
  return {pair:outputArr, distance:distance1};

}
