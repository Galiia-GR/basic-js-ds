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
  constructor(x) {
    this.value = x;
    this.next = null;
  }

  getUnderlyingList() {
    return this.x;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.value) {
      this.next.el = node;
      this.next = node;
    } else {
      this.value = node;
      this.next = node;
    }
  }

  dequeue() {
    const nodeCurrent = this.value;
    this.head = this.next.el;
    return nodeCurrent.value;
  }
}

module.exports = {
  Queue,
};
