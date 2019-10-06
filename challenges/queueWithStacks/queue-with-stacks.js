const { Node } = require('./node-class');

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
      this.top = node;
    }
  }

  pop() {
    let head = this.top;

    if(!head) return 'Stack is empty';

    this.top = head.next;
    return head.value;
  }

  peek() {
    return (this.top ? this.top.value : null);
  }
}

class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(value) {
    while(this.inStack.peek()) {
      this.outStack.push(this.inStack.pop());
    }

    this.inStack.push(value);

    while(this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }
  }

  dequeue() {
    while(this.inStack.top.next) {
      this.outStack.push(this.inStack.pop());
    }

    const dequeuedVal = this.inStack.pop();

    while(this.outStack.peek()) {
      this.inStack.push(this.outStack.pop());
    }
    return dequeuedVal;
  }
}


module.exports = { Stack, PseudoQueue };