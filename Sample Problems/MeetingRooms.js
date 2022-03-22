// Given an array of meeting time intervals consisting of start and end times [s1, e1], [s2, e2], ... ,
// determine if a person could attend all meetings.

// For example,
// Given [ [0, 30], [5, 10], [15, 20] ],
// return false.

let meetingRooms = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }
  return true;
};

let meetingRoomsII = (intervals) => {
  let count = 0;
  let max = 0;
  let start = [];
  let end = [];

  intervals.forEach((interval) => {
    // n
    start.push(interval[0]);
    end.push(interval[1]);
  });

  start.sort((a, b) => a - b); // nlogn
  end.sort((a, b) => a - b);

  let s = 0;
  let e = 0;

  while (s < start.length && e < end.length) {
    if (start[s] < end[e]) {
      s++;
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      // if start === end then same logic because
      // meeting must end before another begins
      e++;
      count--;
    }
  }

  return max;
};

let meetingRoomsII_2 = (intervals) => {
  let res = new Array(60);

  for (let i = 0; i < 60; i++) {
    res[i] = 0;
  }

  intervals.forEach((interval) => {
    for (let i = interval[0]; i < interval[1]; i++) {
      res[i]++;
    }
  });

  return Math.max(...res);
};

let intervals = [
  [0, 30],
  [15, 20],
  [5, 10],
];

console.log(meetingRooms(intervals));

console.log(meetingRoomsII(intervals));

console.log(meetingRoomsII_2(intervals));
