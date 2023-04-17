const { NotImplementedError } = require("../extensions/index.js");

//const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {
    this.rootEl = addNodeIn(this.rootEl, data);

    function addNodeIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNodeIn(node.left, data);
      } else {
        node.right = addNodeIn(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    function searchNodeIn(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return searchNodeIn(node.left, data);
      } else {
        return searchNodeIn(node.right, data);
      }
    }
    return searchNodeIn(this.rootEl, data);
  }

  find(data) {
    function findNodeIn(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return data;
      }
      if (node.data > data) {
        return findNodeIn(node.left, data);
      } else {
        return findNodeIn(node.right, data);
      }
    }
    return findNodeIn(this.rootEl, data);
  }

  remove(data) {
    this.rootEl = removeNodeIn(this.rootEl, data);

    function removeNodeIn(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNodeIn(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNodeIn(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRightNode = node.right;

        while (minFromRightNode.left) {
          minFromRightNode = minFromRightNode.left;
        }

        node.data = minFromRightNode.data;

        node.right = removeNodeIn(node.right, minFromRightNode.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootEl) {
      return;
    }
    let minNodeIn = this.rootEl;
    while (minNodeIn.left) {
      minNodeIn = minNodeIn.left;
    }

    console.log(minNodeIn.data);
    return minNodeIn.data;
  }

  max() {
    if (!this.rootEl) {
      return;
    }
    let maxNodeIn = this.rootEl;
    while (maxNodeIn.right) {
      maxNodeIn = maxNodeIn.right;
    }
    console.log(maxNodeIn.data);
    return maxNodeIn.data;
  }
}
module.exports = {
  BinarySearchTree,
};
