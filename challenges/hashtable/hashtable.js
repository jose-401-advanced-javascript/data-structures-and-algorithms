const makeHash = size => key => key
  .split('')
  .reduce((acc, letter, i) => acc += letter.charCodeAt(0) + i, 0) % size;

class Hashtable {
  constructor(size = 20, hashAlgorithm = makeHash) {
    this.buckets = new Array(size).fill([]);
    this.hashAlgorithm = hashAlgorithm(size);
  }

  add(key, value) {
    let index = this.hashAlgorithm(key);

    if(!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);

    return index;
  }
}

module.exports = { Hashtable };