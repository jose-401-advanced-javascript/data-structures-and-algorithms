const { Node } = require('./node-class');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    let current;
    if(this.head === null) 
      this.head = node; 
    else { 
      current = this.head; 

      while(current.next) { 
        current = current.next; 
      } 
 
      current.next = node; 
    } 
  }

  includes(value) {
    const current = this.head;

    while(current !== null){
      if(current.value === value) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  toString() {
    let current = this.head; 
    let str = ''; 
    while(current) { 
      str += current.value + ' '; 
      current = current.next; 
    } 
    return str;
  }
}

module.exports = { LinkedList };