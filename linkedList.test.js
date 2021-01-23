const Queue = require('./linkedList').Queue;

test('q.size', () => {
  const q = new Queue();

  expect(q.size).toBe(0);
  q.enqueue(10);
  expect(q.size).toBe(1);
  q.enqueue(20);
  expect(q.size).toBe(2);
  q.enqueue(30);
  expect(q.size).toBe(3);
  q.dequeue();
  expect(q.size).toBe(2);
  q.enqueue(40);
  expect(q.size).toBe(3);
  q.dequeue();
  q.dequeue();
  expect(q.size).toBe(1);
  q.dequeue();
  expect(q.size).toBe(0);
  q.dequeue();
  expect(q.size).toBe(0);
  q.dequeue();
  expect(q.size).toBe(0);
});

test('q.front()', () => {
  const q = new Queue();

  expect(q.front()).toBe(null);
  q.enqueue(10);
  expect(q.front()).toBe(10);
  q.enqueue(20);
  expect(q.front()).toBe(10);
  q.enqueue(30);
  expect(q.front()).toBe(10);
  q.dequeue();
  expect(q.front()).toBe(20);
  q.enqueue(40);
  expect(q.front()).toBe(20);
  q.dequeue();
  q.dequeue();
  expect(q.front()).toBe(40);
  q.dequeue();
  expect(q.front()).toBe(null);
  q.dequeue();
  expect(q.front()).toBe(null);
  q.dequeue();
  expect(q.front()).toBe(null);
});

test('q.rear()', () => {
  const q = new Queue();

  expect(q.rear()).toBe(null);
  q.enqueue(10);
  expect(q.rear()).toBe(10);
  q.enqueue(20);
  expect(q.rear()).toBe(20);
  q.enqueue(30);
  expect(q.rear()).toBe(30);
  q.dequeue();
  expect(q.rear()).toBe(30);
  q.enqueue(40);
  expect(q.rear()).toBe(40);
  q.dequeue();
  q.dequeue();
  expect(q.rear()).toBe(40);
  q.dequeue();
  expect(q.rear()).toBe(null);
  q.dequeue();
  expect(q.rear()).toBe(null);
  q.dequeue();
  expect(q.rear()).toBe(null);
});

test('q.enqueue()', () => {
  const q = new Queue();

  expect(q.enqueue(10)).toBe(10);
  expect(q.enqueue(20)).toBe(20);
  expect(q.enqueue(30)).toBe(30);
});

test('q.dequeue()', () => {
  const q = new Queue();

  expect(q.dequeue()).toBe(undefined);
  q.enqueue(10);
  q.enqueue(20);
  expect(q.dequeue()).toBe(10);
  expect(q.dequeue()).toBe(20);
  expect(q.dequeue()).toBe(undefined);
  expect(q.dequeue()).toBe(undefined);
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  q.enqueue(40);
  expect(q.dequeue()).toBe(10);
  expect(q.dequeue()).toBe(20);
  q.enqueue(50);
  q.enqueue(60);
  expect(q.dequeue()).toBe(30);
  expect(q.dequeue()).toBe(40);
  expect(q.dequeue()).toBe(50);
  expect(q.dequeue()).toBe(60);
  expect(q.dequeue()).toBe(undefined);
});
