const { NotImplementedError, ListNode } = require("../extensions/index.js");

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

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let nodeCurrent = this.head;
      while (nodeCurrent.next) {
        nodeCurrent = nodeCurrent.next;
      }
      nodeCurrent.next = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    let nodeCurrent = this.head;
    this.head = this.next;
    return nodeCurrent;
  }
}

module.exports = {
  Queue,
};
