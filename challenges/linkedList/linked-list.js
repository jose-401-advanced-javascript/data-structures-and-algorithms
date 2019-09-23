const { Node } = require('Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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
    this.size++; 
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

  
}

module.exports = { LinkedList };