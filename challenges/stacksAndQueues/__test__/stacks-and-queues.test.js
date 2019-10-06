const { Stack, Queue } = require('../stacks-and-queues');

describe('Stacks', () => {
  const stack = new Stack();

  it('creates and empty stack', () => {
    expect(stack).toEqual({ top: null });
  });

  it('can push value into a stack', () => {
    stack.push('test');
    expect(stack.top.value).toBe('test');
  });

  it('can push multiple values into the stack', () => {
    stack.push('test');
    stack.push('test-2');
    stack.push('test-3');
    expect(stack.top.value).toBe('test-3');
    expect(stack.top.next.value).toBe('test-2');
    expect(stack.top.next.next.value).toBe('test');
  });

  it('can pop a value', () => {
    stack.push('test');
    stack.push('test-2');
    stack.pop();
    expect(stack.top.value).toBe('test');
  });

  it('pop can empty a value', () => {
    const stack2 = new Stack();
    stack2.push('test');
    stack2.push('test-2');
    stack2.push('test-3');
    const result1 = stack2.pop();
    const result2 = stack2.pop();
    const result3 = stack2.pop();
    expect(result1).toBe('test-3');
    expect(result2).toBe('test-2');
    expect(result3).toBe('test');
    expect(stack2.top).toBe(null);
  });

  it('can peek into the next item in the stack', () => {
    stack.push('test');
    const stack2 = new Stack;
    const value = stack.peek();
    const value2 = stack2.peek();
    expect(value).toBe('test');
    expect(value2).toBe('Stack is empty');
  });
});

describe('Queue class', () => {
  const queue = new Queue();

  it('creates an empty Queue', () => {
    expect(queue).toEqual({ front: null });
  });

  it('can enqueue', () => {
    queue.enqueue('test');
    expect(queue.front.value).toBe('test');
  });
  it('can enqueue multiple times', () => {
    queue.enqueue('test-2');
    expect(queue.front.value).toBe('test');
    expect(queue.front.next.value).toBe('test-2');
  });
});