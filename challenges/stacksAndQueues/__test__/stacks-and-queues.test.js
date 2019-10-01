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
});