const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

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
    this.rootMain = null
  }
  root(data) {
    return this.rootMain
  }

  add(data) {
    this.rootMain = add(this.rootMain, data);
    function add(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = add(node.left, data);
      } else {
        node.right = add(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return search(this.rootMain, data);
    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true
      }
      return data < node.data ?
        search(node.left, data) :
        search(node.right, data);
    }
  }

  find(cb) {
    let temp = ''
    leftSearch(this.rootMain, cb)
    function leftSearch(node, cb) {
      if (node) {
        leftSearch(node.left, cb)
        if (node.data === cb) {
          temp = node
        }
        leftSearch(node.left, cb)
      }
    }
    if (temp === '') {
      rightSearch(this.rootMain, cb)
    } else {
      return temp
    }
    function rightSearch(node, cb) {
      if (node) {
        rightSearch(node.right, cb)
        if (node.data === cb) {
          temp = node
        }
        rightSearch(node.left, cb)
      }
    }
    if (temp === '') {
      temp = {data: null}
      return temp.data
    } else {
      return temp
    }
  }

  remove(data) {
    this.rootMain = remove(this.rootMain, data);
    function remove(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left;
          return node
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = remove(node.right, minFromRight.data)
        return node
      }
    }
  }

  min() {
    if (!this.rootMain) {
      return
    }
    let node = this.rootMain;
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootMain) {
      return;
    }
    let node = this.rootMain;
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};