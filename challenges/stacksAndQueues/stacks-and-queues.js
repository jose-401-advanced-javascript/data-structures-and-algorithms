const { Node } = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let head = this.top;
    let node = new Node(value);

    if(!head) {
      this.top = node;
    }
    else {
      node.next = head;
      this.stack = node;
    }
  }

  pop() {
    let head = this.top;

    if(!head) return 'Stack is empty';

    this.top = head.next;
    return head.value;
  }

  peek() {
    if(!this.top) return 'Stack is empty';
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.queue = null;
  }
}

module.exports = { Stack, Queue };