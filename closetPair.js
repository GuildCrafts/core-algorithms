var points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
];

function bruteForce(points) {
    var point1 = null;
    var point2 = null;
    var distance = null;
// null is where the thing is known to exist, but it's not known what the value is.
    //we will loop through all of the points
    for (var i = 0; i < points.length; i = i + 1) {
        //compare this point with all of the points ahead of it in the array
        for (var j = i + 1; j < points.length; j = j + 1) {
            //compute distance using distance formula (Pythagoreom theory)
            var curr = Math.sqrt(Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2));

            //compare this with our shortest distance
            //or set it if it's the first time we run
            if (distance === null || curr < distance) {
                distance = curr;
                point1 = points[i];
                point2 = points[j];
            }
        }
    }
    //point1 and point2 hold the closest points
    //distance is the distance between the two points
    return {
        "point1": point1,
        "point2": point2,
        "distance": distance
    };
};
bruteForce(points);
