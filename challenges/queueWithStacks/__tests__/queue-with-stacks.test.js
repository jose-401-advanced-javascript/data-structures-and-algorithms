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
});