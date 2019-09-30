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

    const node = new Node(newVal);

    let current = this.head;
    if(current.value === value) {
      this.append(newVal);
    }

    while(current.next) {
      if(current.next.value === value) {
        node.next = current.next;
        current.next = node;
        current = node;
      } 
      current = current.next;
    } 
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let current = this.head;
    if(current.head === value) {
      this.insert(newVal);
    }
    while(current.next) {
      if(current.value === value) {
        node.next = current.next;
        current.next = node;
      }
      current = current.next;
    }
  }
}

module.exports = { LinkedList };