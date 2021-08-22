"use strict";

/** Node: node for a queue. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if (!(this.first)) this.first = newNode;

    if (this.last) {
      // list has elements
      // prev for newNode points to the current last node.
      newNode.prev = this.last;

      // the current last node, this.last, needs to point to the 
      //  newNode. newNode is now on the link chain as the last node.
      this.last.next = newNode;

      this.last = newNode;
    } else {
      // this.last is null
      this.last = newNode;
    }

    this.size++;
  }


  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!(this.first)) {
      throw Error("Queue is empty.");
    }

    // retain value from the to-be-removed first node
    const val = this.first.val;

    if (this.first === this.last) {
      // list only had one value and we just removed it
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.first.prev = null;
    }

    this.size--;
    return val;
  }


  /** peek(): return the value of the first node in the queue. 
   *  peek() returns undefined when the queue is empty / size = 0
  */

  peek() {

    return this.first ? this.first.val : undefined

  }


  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false
  }
}

module.exports = Queue;
