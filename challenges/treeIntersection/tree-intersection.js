 
const treeIntersection = (tree1, tree2) => {
  const treeOne = tree1.preOrder(tree1.root);
  const treeTwo = tree2.preOrder(tree2.root);
  return treeOne.filter(value => treeTwo.includes(value));
};

module.exports = {
  treeIntersection
};
