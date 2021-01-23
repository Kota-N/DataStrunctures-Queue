class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = this._front = 0;
    this._rear = capacity - 1;
    this.array = new Array(capacity);
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  front() {
    return this.isEmpty() ? null : this.array[this._front];
  }

  rear() {
    return this.isEmpty() ? null : this.array[this._rear];
  }

  enqueue(value) {
    if (this.isFull()) return;
    this._rear = (this._rear + 1) % this.capacity;
    this.array[this._rear] = value;
    this.size++;
    return value;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const value = this.array[this._front];
    this._front = (this._front + 1) % this.capacity;
    this.size--;
    return value;
  }
}

const q = new Queue(1);
q.enqueue(10);
q.enqueue(20);

module.exports = { Queue };
