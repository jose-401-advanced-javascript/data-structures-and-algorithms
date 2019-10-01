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

  
});