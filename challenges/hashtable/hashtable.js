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

  get(key) {
    let index = this.hashAlgorithm(key);

    if(!this.buckets[index]) return null;
    
    for(let i = 0; i < this.buckets.length; i++) {
      if(this.buckets[i][0] === key) return this.buckets[i][1];
    }
  }
}

module.exports = { Hashtable };