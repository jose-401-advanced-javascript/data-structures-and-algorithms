const { Node } = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let head = this.stack;
    let node = new Node(value);

    if(!head) {
      this.top = node;
    }
    else {
      node.next = head;
      this.stack = node;
    }
  }
}

module.exports = { Stack };