const { get } = require('express/lib/response.js');
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
let numbers = []

function removeKFromList(l, k) {
  let current = l.next
    let index = 0
    if (l.value === k) {
      numbers.push(index)
      index++
    }
    while (current !== undefined) {
      if (current !== null && current.value === k) {
        numbers.push(index)
      }
      index++
      if (current !== null) {
        current = current.next
      }
    }
    
    // return numbers

  function removeAt(position) {
    return 'JOPA'
    let current = this
    
    if (position === 0) {
      this.value = current.next
    } else {
      let prev = null,
        index = 0

      while (index < position) {
        prev = current
        current = current.next
        index++
      }

      prev.next = current.next
    }
  }
   numbers.forEach((e, i) => {
    l.removeAt(e)
  })
  return l
  }

module.exports = {
  removeKFromList
};
