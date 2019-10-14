const { Node, BinaryTree, BinarySearchTree } = require('../tree');

describe('Binary Tree', () => {
  const tree = new BinaryTree();
  const searchTree = new BinarySearchTree();

  it('creates an empty tree', () => {
    expect(tree).toEqual({ root: null });
  });

  it('can instantiate a tree with a node', () => {
    tree.root = new Node ('D');
    expect(tree.root.value).toEqual('D');
  });

  it('can successfully add a left child and right child to a single root node', () => {
    tree.root.left = new Node ('C');
    tree.root.right = new Node ('E');
    expect(tree.root.left.value).toEqual('C');
    expect(tree.root.right.value).toEqual('E');
  });

  it('can successfully return a collection from a pre-order traversal', () => {
    expect(tree.preOrder(tree.root)).toEqual(['D', 'C', 'E']);
  });

  it('can successfully return a collection from an in-order traversal', () => {
    expect(tree.inOrder(tree.root)).toEqual(['C', 'D', 'E']);
  });

  it('can successfully return a collection from a post-order traversal', () => {
    expect(tree.postOrder(tree.root)).toEqual(['C', 'E', 'D']);
  });

  it('can add a value in the right side', () => {
    searchTree.root = new Node('D');
    searchTree.add('F');
    searchTree.add('B');
    searchTree.add('A');
    searchTree.add('C');
    searchTree.add('E');

    expect(searchTree.root.right.value).toBe('F');
    expect(searchTree.root.right.left.value).toBe('E');
    expect(searchTree.root.left.value).toBe('B');
    expect(searchTree.root.left.left.value).toBe('A');
  });

  it('contains returns the right answer', () => {
    expect(searchTree.contains('D')).toBe(true);
    expect(searchTree.contains('X')).toBe(false);
  });
});