
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node) {
    if(node === null) return [];

    let stack = [];
    let result = [];
    stack.push(node);

    while(stack.length > 0) {
      let current = stack.pop();
      result.push(current.value);
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
    }

    return result;
  }

  inOrder(node) {

    if(node === null) return [];
    let stack = [];
    let result = [];
    let pointerNode = node;

    while(stack.length !== null) {

      if(pointerNode !== null) {
        stack.push(pointerNode);
        pointerNode = pointerNode.left;
      }

      else {
        pointerNode = stack.pop();
        result.push(pointerNode.value);
        pointerNode = pointerNode.right;
      }
    }
    return result;
  }

  postOrder(node) {

    if(node === null) return [];
    let stack = [];
    let result = [];
    stack.push(node);

    while(stack.length !== 0) {
      let pointer = stack.pop();
      result.unshift(pointer.value);

      if(pointer.left) {
        stack.push(pointer.left);
      }

      if(pointer.right) {
        stack.push(pointer.right);
      }
    }
    return result;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = this.root;
    return recurse(value, node);
  }

  contains(value) {
    let node = this.root;
    return recurseFind(value, node);
  }
}

const recurse = (value, node) => {
  let dir;
  value > node.value ? dir = 'right' : dir = 'left';

  if(node[dir]) {
    return recurse(value, node[dir]);
  }
  return node[dir] = new Node(value);
};

const recurseFind = (value, node) => {
  let dir;

  if(value === node.value) return true;

  value > node.value ? dir = 'right' : dir = 'left';

  if(node[dir]) return recurseFind(value, node[dir]);
  
  else return false;

};

module.exports = {
  BinaryTree,
  BinarySearchTree
};
