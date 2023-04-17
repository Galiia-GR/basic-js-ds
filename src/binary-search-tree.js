const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
    this.data=data;
    this.left=null;
    this.right=null;
  }
}

class BinarySearchTree {

 constructor() {
this.root=null;
  }

  add(data) {

    this.root=addNodeIn(this.root, data)


function addNodeIn(node, data) {
  if (!node){
    return new Node(data);
  }

  if(node.data===data){
    return node;
  }

  if (data < node.data){
    node.left=addNodeIn(node.left, data)
  } else{
    node.right=addNodeIn(node.right, data)
  }
  console.log(node);
  return node;
}

}
has(data) {
  return searchNodeIn(this.root, data);

  function searchNodeIn(node, data){
    if (!node){
      return false;
    }
    if (node.data===data){
      return true;
    }

    return data < node.data ? searchNodeIn(node.left, data) : searchNodeIn (node.right, data)
    }
    }


  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};