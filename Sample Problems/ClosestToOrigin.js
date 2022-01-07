// var kClosest = function (points, k) {
//   let distanceMap = new Map();

//   points.forEach((point) => {
//     let distance = Math.sqrt((point[0] - 0) ** 2 + (point[1] - 0) ** 2);
//     if (distanceMap.get(distance) === undefined) {
//       distanceMap.set(distance, [point]);
//     } else {
//       distanceMap.get(distance).push(point);
//     }
//   });
//   console.log(distanceMap);
// };

var kClosest = function (points, k) {
  // Sort the array with a custom lambda comparator function
  points.sort((a, b) => squaredDistance(a) - squaredDistance(b));
  console.log(points);
  // Return the first k elements of the sorted array
  return points.slice(0, k);
};

// Calculate and return the squared Euclidean distance
const squaredDistance = ([x, y]) => x ** 2 + y ** 2;

let points = [
  [3, 3],
  [5, -1],
  [-2, 4],
];

let k = 2;

console.log(kClosest(points, k));
