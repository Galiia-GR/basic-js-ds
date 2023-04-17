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

    find(data) {
      return findNodeIn(this.root, data);

      function findNodeIn(node, data){
        if (!node){
          return null;
        }
        if (node.data===data){
          return data;
        }

        return data < node.data ? findNodeIn(node.left, data) : findNodeIn (node.right, data)
        }
    }

    remove(data) {
      this.root=removeNodeIn(this.root, data);
      function removeNodeIn(node, data){
        if (!node){
          return null;
      }
      if (data < node.data){
        node.left=removeNodeIn(node.left, data);
        return node;
      } else if (data > node.data){
        node.right=removeNodeIn(node.right, data);
        return node;
      } else{

        if (!node.left && !node.right) {
      return null;
        }

        if (!node.left) {
          node=node.right;
        return node; }

        if (!node.right) {
          node=node.left;
          return node;
        }

      let minFromRightNode=node.right;

      console.log(minFromRightNode);

      while (minFromRightNode.left){
        minFromRightNode=minFromRightNode.left;
        }

        node.data=minFromRightNode.data;

        node.right=removeNodeIn(node.right, minFromRightNode.data)

        return node;

      }
        }
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