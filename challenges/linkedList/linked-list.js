const { Node } = require('./node-class');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insert(value) {
    const node = new Node(value);
    let current;
    if(this.head === null) {
      this.head = node; 
    }
    else { 
      current = this.head; 

      while(current.next) { 
        current = current.next; 
      } 
 
      current.next = node; 
    } 
  }

  includes(value) {
    let current = this.head;
    console.log(current);
    while(current !== null){
      
      if(current.value === value) {
        return true;
      }
      if(current.value !== value) {
        current = current.next;      
      }
      if(current.value !== value && current.next === null) {
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

  insertBefore(value, newVal) {
    if(!this.includes(value)) {
      return 'this value is not in the list';
    }
    else {
      const node = new Node(newVal);
      let current = this.head;
      // console.log(current);
      while(current !== null){
        if(current.value === value) {
          node.next = current;
          current = node;
          return;
        }
        if(current.value !== value) {
          current = current.next;
        }
        if(current.value !== value && current.next === null) {
          return;
        }
      }
    }
  }
}

module.exports = { LinkedList };