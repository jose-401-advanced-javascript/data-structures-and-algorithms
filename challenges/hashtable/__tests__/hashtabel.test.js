const { Hashtable } = require('../hashtable');

describe('hashtable testing', () => {
  it('can add and get', () => {
    const hashtable = new Hashtable();
    hashtable.add('test', 'value');
    expect(hashtable.get('test')).toBe('value');
  });

  it('can see if something exists/is contained in buckets', () => {
    const hashtable = new Hashtable();
    hashtable.add('test', 'value');
    expect(hashtable.contains('test')).toBe(true);
  });

  it('can successfully make a hash using a key', () => {
    const hashtable = new Hashtable();
    expect(hashtable.hash('test')).toBe(14);
  });
});