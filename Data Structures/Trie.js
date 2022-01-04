class TrieNode {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  //   _setEnd() {
  //     this.end = true;
  //   }

  //   _isEnd() {
  //     return this.end;
  //   }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  _add(word) {
    word = word.split("");
    let node = this.root;

    word.forEach((letter, index) => {
      // check if current letter is already a child of the root
      if (!node.keys.get(letter)) {
        // console.log("NO LETTER, INSERTING NEW NODE FOR", letter, "FOR", node);
        node.keys.set(letter, new TrieNode());
      }

      // check if end of word
      if (index === word.length - 1) {
        node.end = true;
      }

      // proceed to next trie depth
      node = node.keys.get(letter);
    });
    return;
  }

  _contains(word) {
    let split_word = word.split("");
    let node = this.root;

    split_word.forEach((letter, index) => {
      if (index === word.length - 1) {
        return;
      }

      if (node.keys.get(letter)) {
        node = node.keys.get(letter);
      } else {
        return;
      }
    });

    if (node.end) {
      console.log(`Trie contains ${word}`);
      return true;
    } else {
      console.log(`Trie does not contain ${word}`);
      return false;
    }
  }

  //   _delete(word) {
  //     if (!this._contains(word)) {
  //       console.log(`${word} not in trie, cannot delete`);
  //       return;
  //     }

  //     let split_word = word.split("");
  //     let node = this.root;
  //     let precedingWords;

  //     split_word.forEach((letter, index) => {
  //       if (index === word.length - 1) {
  //         return;
  //       }

  //       if (node.keys.get(letter)) {
  //         if (node.keys.get(letter).end && index === word.length - 1) {
  //           precedingWords = true;
  //         }
  //         node = node.keys.get(letter);
  //       }
  //     });

  //     if (node.keys.size === 0 && !precedingWords) {
  //       this.root.keys.delete(word[0]);
  //       console.log("No children or preceding words, deleted parent node");
  //     } else {
  //       node.end = false;
  //       console.log("Yes children or preceding words, `end` set to FALSE");
  //     }
  //   }
}

const myTrie = new Trie();

myTrie._add("ca");
// myTrie._add("dog");
myTrie._add("cat");

// myTrie._contains("cat");
// console.log("BEFORE", myTrie.root.keys.get("c"));
myTrie._delete("ca");

console.log("AFTER", myTrie.root.keys.get("c"));
console.log("AFTER", myTrie.root.keys.get("c").keys.get("a"));
