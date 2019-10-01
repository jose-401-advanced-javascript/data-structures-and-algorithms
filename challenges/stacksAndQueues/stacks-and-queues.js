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
    this.front = null;
  }

  enqueue(value) {
    let head = this.front;
    let node = new Node(value);

    if(!head) {
      this.front = node;
    }
    else {
      let traverseNode = head;
      while(traverseNode.next) {
        traverseNode = traverseNode.next;
      }
      traverseNode.next = node;
    }
  }

  dequeue() {
    let head = this.front;

    if(!head) return 'Que is empty';

    this.front = head.next;
    return head.value;
  }

  peek() {
    if(!this.front) return 'Que is empty';
    return this.queue.value;
  }
}

module.exports = { Stack, Queue };