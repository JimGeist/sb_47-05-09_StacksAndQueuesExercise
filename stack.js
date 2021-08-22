"use strict";

const LinkedList = require("./linked-list");
/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this._list = new LinkedList();
  }

  setStack(ptrHead, ptrTail, nbrLength) {
    // this.first = this._list.head;
    // this.last = this._list.tail;
    // this.size = this._list.length;
    this.first = ptrHead;
    this.last = ptrTail;
    this.size = nbrLength;

  }


  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // Be careful because push needs to add at first. This is a LinkedList unshift.
    this._list.unshift(val);
    this.setStack(this._list.head, this._list.tail, this._list.length);
  }


  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // Nope, not the linked list pop. We want to shift because we are always
    //  adding and removing from first (linked list head);
    const val = this._list.shift();
    this.setStack(this._list.head, this._list.tail, this._list.length);
    return val;
  }

  /** peek(): return the value of the first node in the stack. 
   *  peek() returns undefined when the stack is empty.
  */

  peek() {

    return (this.first) ? this.first.val : undefined

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.first) ? false : true
  }
}

module.exports = Stack;
