function Node(value) {
  this.value = value;
  this.next = null;
}

class Queue {
  constructor() {
    this.size = 0;
    this._front = this._rear = null;
  }

  front() {
    return this._front ? this._front.value : null;
  }

  rear() {
    return this._rear ? this._rear.value : null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) this._front = this._rear = newNode;
    else this._rear = this._rear.next = newNode;
    this.size++;
    return value;
  }

  dequeue() {
    if (this.size === 0) return;
    const value = this._front.value;
    if (this.size === 1) this._front = this._rear = null;
    else this._front = this._front.next;
    this.size--;
    return value;
  }
}

module.exports = { Queue };
