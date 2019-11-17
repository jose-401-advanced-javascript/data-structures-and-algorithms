const { treeIntersection } = require('../tree-intersection');
const { BinaryTree, Node } = require('../../tree/tree');

describe('Tree Intersection', () => {
  const tree1 = new BinaryTree();
  const tree2 = new BinaryTree();
  it('find the shared values between two trees', () => {
    tree1.root = new Node(150);
    tree1.root.left = new Node(100);
    tree1.root.right = new Node(250);
    tree2.root = new Node(42);
    tree2.root.left = new Node(100);
    tree2.root.right = new Node(600);
    expect(treeIntersection(tree1, tree2)).toEqual([100]);
  });
});