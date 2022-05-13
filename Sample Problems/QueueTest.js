const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

const carsQueue = new PriorityQueue((a, b) => {
  //   if (a.year > b.year) {
  //     return -1;
  //   }
  //   if (a.year < b.year) {
  //     // prioratize newest cars
  //     return 1;
  //   }
  //   // with least price
  return a.price < b.price ? -1 : 1;
});

const cars = [
  { year: 2013, price: 35000 },
  { year: 2010, price: 2000 },
  { year: 2013, price: 30000 },
  { year: 2017, price: 50000 },
  { year: 2013, price: 25000 },
  { year: 2015, price: 40000 },
  { year: 2022, price: 70000 },
];
cars.forEach((car) => carsQueue.enqueue(car));

while (!carsQueue.isEmpty()) {
  console.log(carsQueue.dequeue());
}
