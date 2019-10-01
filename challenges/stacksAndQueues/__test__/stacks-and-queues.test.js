const { Stack, Queue } = require('../stacks-and-queues');

describe('Stacks', () => {
  const stack = new Stack();

  it('creates and empty stack', () => {
    expect(stack).toEqual({ top: null });
  });


});