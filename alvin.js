const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

let buy = ["100", "120", "99", "99", "97", "115"];
let sell = ["109", "110", "110", "114", "115", "119"];

let buy_p = new MinPriorityQueue();
let sell_p = new MinPriorityQueue();

// O(logn) time for enqueue
for (let b of buy) buy_p.enqueue(parseInt(b));
for (let s of sell) sell_p.enqueue(parseInt(s));

let sales = 0;

while (buy_p.size() && sell_p.size()) {
  if (buy_p.front() >= sell_p.front()) {
    console.log("this is a sale", buy_p.front(), sell_p.front());
    sales++;
    sell_p.dequeue();
  }

  buy_p.dequeue();
}

console.log(sales);
