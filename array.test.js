const Queue = require('./array').Queue;

test('[Array Implementation] q.capacity', () => {
  const q = new Queue(10);
  expect(q.capacity).toBe(10);

  const r = new Queue(10000);
  expect(r.capacity).toBe(10000);

  const s = new Queue(2581);
  expect(s.capacity).toBe(2581);
});

test('[Array Implementation] q.size', () => {
  const q = new Queue(10);

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

test('[Array Implementation] q.isEmpty()', () => {
  const q = new Queue(3);

  expect(q.isEmpty()).toBe(true);
  q.enqueue(10);
  expect(q.isEmpty()).toBe(false);
  q.dequeue();
  expect(q.isEmpty()).toBe(true);

  q.enqueue(10);
  q.enqueue(20);
  expect(q.isEmpty()).toBe(false);
  q.dequeue();
  expect(q.isEmpty()).toBe(false);
  q.dequeue();
  expect(q.isEmpty()).toBe(true);
  q.dequeue();
  expect(q.isEmpty()).toBe(true);
});

test('[Array Implementation] q.isFull()', () => {
  const q = new Queue(3);

  expect(q.isFull()).toBe(false);
  q.enqueue(10);
  expect(q.isFull()).toBe(false);
  q.enqueue(20);
  expect(q.isFull()).toBe(false);
  q.enqueue(30);
  expect(q.isFull()).toBe(true);

  q.dequeue();
  expect(q.isFull()).toBe(false);
  q.dequeue();
  expect(q.isFull()).toBe(false);
  q.dequeue();
  expect(q.isFull()).toBe(false);
  q.dequeue();
  expect(q.isFull()).toBe(false);
});

test('[Array Implementation] q.front()', () => {
  const q = new Queue(10);

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

test('[Array Implementation] q.rear()', () => {
  const q = new Queue(10);

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

test('[Array Implementation] q.enqueue()', () => {
  const q = new Queue(3);

  expect(q.enqueue(10)).toBe(10);
  expect(q.enqueue(20)).toBe(20);
  expect(q.enqueue(30)).toBe(30);
  expect(q.enqueue(40)).toBe(undefined);
});

test('[Array Implementation] q.dequeue()', () => {
  const q = new Queue(10);

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
