const { PseudoQueue } = require('../queue-with-stacks');

describe('PseudoQueue', () => {
  const pQueue = new PseudoQueue();
  
  it('creates an empty pseudo-queue', () => {
    expect(pQueue).toEqual({ inStack: { top: null }, outStack: { top: null } }); 
  });

  it('can enqueue', () => {
    pQueue.enqueue('test');
    expect(pQueue.inStack.top.value).toBe('test');
  });

  it('can enqueue multiple times', () => {
    pQueue.enqueue('test-2');
    expect(pQueue.inStack.top.value).toBe('test');
    expect(pQueue.inStack.top.next.value).toBe('test-2');
  });

  it('can dequeue correctly', () => {
    const removed = pQueue.dequeue();
    expect(removed).toBe('test-2');
    expect(pQueue.inStack.top.value).toBe('test');
  });

  it('dequeue can empty the pseudo-queue', () => {
    const removed = pQueue.dequeue();
    expect(removed).toBe('test');
    expect(pQueue).toEqual({ inStack: { top: null }, outStack: { top: null } }); 
  });
});