const { Hashtable } = require('../hashtable');

describe('hashtable testing', () => {
  it('can add and get', () => {
    const hashtable = new Hashtable();
    hashtable.add('test', 'value');
    expect(hashtable.get('test')).toBe('value');
  });
});