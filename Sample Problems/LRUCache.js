// fast lookup => hashtable
// fast insertion, removal => doubly linked list

// class Node {
//   constructor(key, value) {
//     this.key = key;
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// javascript Map is ordered...
// therefore just add to Map while under capacity
// if you interact with an element, then simply delete and re-add to front

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const tempVal = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tempVal);
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      let [key] = this.cache.keys();
      this.cache.delete(key);
      // this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
    }
  }
}

// let map = new Map();

// console.log(map);
// map.set(0, 1);
// map.set(1, 2);
// map.set(2, 3);
// console.log(map);
// map.delete(0);
// console.log(map);
// map.set(0, 1);
// console.log(map);
// console.log(map.keys().next().value);
