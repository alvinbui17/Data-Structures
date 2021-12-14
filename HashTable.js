// Javascript has an existing implementation of a Hash table data structure called `Map`
// Here, we will implement our own

// Hash Tables are a data structure that allow you to create a list of paired values.
// You can then retrieve a certain value by using the key for that value,
// which you put into the table beforehand.

// Assume you have a housing colony in which there are lots of buildings or apartments and
// if asked the address of your house, you can answer that I live in XYZ building. So, a
// building or apartment is a bucket, housing colony is a hash table and your house is an entry.

// Technically, hashtable stores entries(key, value) pairs in buckets. HashTable uses key's
// hashcode to figure out the bucket. Ideally, the hash function is written in such a manner
// that each key is mapped to a unique bucket.

// Creating a HashTable class and create a table of buckets of size 100.
// Key/Value pairs will be stored inside the table property.
class HashTable {
  constructor() {
    this.table = new Array(100);
    this.size = 0;
  }

  // hash method to accept a key and transform it into an index
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      // create hash by summing ASCII code of chars in key
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
      hash += key.charCodeAt(i);
    }
    // ensure that hash is between 0 and 100 (num of buckets)
    return hash % this.table.length;
  }

  _set(key, value) {
    // initial implementation that results in index collision
    // const index = this._hash(key);

    // this.table[index] = value;
    // this.size++;

    const index = this._hash(key);

    // check if key in one of the arrays at index is equal to key passed to method
    if (this.table[index]) {
      this.table[index].forEach((array) => {
        // if yes then update value
        if (array[0] === index) {
          array[0] = value;
          return;
        }
        // if no then push a new key/value pair to that index
        this.table[index].push([key, value]);
      });
    } else {
      // if no arrays at that index, then create a new empty array at index and push key/value pair
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  _get(key) {
    // initial implementation that doesn't account for index collision
    // const index = this._hash(key);
    // // console.log(key, "KEY", index, "INDEX");
    // // console.log(this.table);
    // console.log(this.table[index]);

    let result;
    const index = this._hash(key);

    // if this.table[index] is not empty
    if (this.table[index]) {
      // check each array for matching key and assign that array to result to return
      this.table[index].forEach((array) => {
        if (array[0] === key) {
          result = array;
        }
      });

      return result;
    }
  }

  _remove(key) {
    // pre-index collision proof implementation
    // const index = this._hash(key);

    // if (this.table[index] && this.table.length) {
    //   this.table[index] = undefined;
    //   this.size--;
    // } else {
    //   return false;
    // }

    const index = this._hash(key);

    // if there is an array of key/value(s) at index
    if (this.table[index] && this.table.length) {
      this.table[index].forEach((array, arrayindex) => {
        // if array has matching key then delete that array (key/value pair)
        // eg array.splice(3,1) --> remove 1 element at index 3
        if (array[0] === key) {
          this.table[index].splice(arrayindex, 1);
        }
      });

      this.size--;
      return true;
    }
  }
}

// const ht = new HashTable();

// ht._set("Spain", 110);
// ht._set("ǻ", 192);
// ht._set("alvin", "b");

// console.log(ht._get("Spain")); // [ 'ǻ', 192 ]
// console.log(ht._get("ǻ")); // [ 'ǻ', 192 ]
// console.log(ht._get("alvin"));

// console.log(ht._get("Spain")); // [ 'ǻ', 192 ]
// console.log(ht._remove("Spain"));
// console.log(ht._get("Spain")); // [ 'ǻ', 192 ]
// console.log(ht._get("ǻ"));
