class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(node) {
    if(this.next){
      this.next.add(node);
    }
    else {
      this.next.node;
    }
  }
}

module.exports = {
  Node
};