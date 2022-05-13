/*
/*

// Input
ratings = [4, 3, 5, 4, 3] 

There are 9 periods in which the rating consecutively decreases.

5 one day periods: [4], [3], [5], [4], [3]

3 two day periods: [4, 3], [5, 4], [4, 3]

1 three day period: [5, 4, 3]

Output: 9

*/

// Return the number of decreasing ratings
function countDecreasingRatings(ratings) {
  // counting 3 day periods

  // [6], Output: 1
  // [6,5], Output: 3
  // [6,5,4], Output: 6
  // [6,5,4,3], Output: 10
  // [6,5,4,3,2], Output: 15
  // [6,5,4,3,2,1], Output: 21
  // [6,5,4,3,2,1,3]
  // [6,5,4,3,2,1,3,2]
  let count = 0;

  // [6,5,3,2]
  if (ratings.length > 1) {
    let streak = 0;
    for (let i = 1; i < ratings.length; i++) {
      let current = ratings[i];
      let previous = ratings[i - 1];
      if (previous - current === 1) {
        streak += 1;
        count += streak;
      } else {
        streak = 0;
      }
    }
  }
  count += ratings.length;
  return count;
}

console.log(countDecreasingRatings([6, 5, 4, 3, 2, 1, 3, 2]));
