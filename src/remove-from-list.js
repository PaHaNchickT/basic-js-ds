const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  let out = []
  deleting(l)
  function deleting(l) {
    for (let key in l) {
    if (l[key] instanceof Object === true) {
      deleting(l[key])
    } else if (typeof l[key] === 'number') {
      out.push(l[key])
    }
  }
  }

  out = out.filter(e => e !== k)

  let i = 0
  let test = new ListNode(out[i])
  adding(test)
  function adding(test) {
    i += 1
    if (out[i] !== undefined) {
       test.next = new ListNode(out[i])
       adding(test.next)
    }
  }

  return test
}

module.exports = {
  removeKFromList
};
