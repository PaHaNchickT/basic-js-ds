const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
let arr = [],
  out = arr

// class Queue {

//   getUnderlyingList() {
//     return arr
//   }

//   enqueue(e) {
//     out.push(e)
//     return out
//   }

//   dequeue() {
//     let value,
//       temp = out.join()
//     value = temp.slice(0, 1)
//     temp = temp.slice(1, temp.length)
//     temp = temp.split(',')
//     out = []
//     temp.forEach(e => {
//       if (e !== '') {
//         out.push(+e)
//       }
//     })
//     temp = []
//     return +value
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let current = this.head

    while(current) {
      console.log(current.value)
      current = current.next
    }
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new Node(value)
    } else {
      let current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = new Node(value)
    }
    this.length++
  }

  dequeue() {
    let current = this.head

    this.head = current.next
    this.length--
    return current.value
  }
}

module.exports = {
  Queue
};
