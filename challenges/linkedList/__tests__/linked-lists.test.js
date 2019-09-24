const { LinkedList } = require('../linked-list');
const { Node } = require('../node-class');

describe('Linked list', () => {

  

  it('crates an empty linked list', () =>{
    const list = new LinkedList();
    expect(list).toEqual({ head: null });
  });

  describe('insert', () => {

    const list = new LinkedList();
    list.insert('test');
    list.insert('test-2');
 
    it('inserts node into linked list', () => {
      expect(list.head).toBeInstanceOf(Node);
      expect(list.head.value).toBe('test');
    });

    it('properly insert multiple nodes into the linked list', () => {
      expect(list.head.next).toBeInstanceOf(Node);
      expect(list.head.next.value).toBe('test-2');    
    });

    it('head property will properly point to the first node in the linked list', () => {
      expect(list.head).toBeInstanceOf(Node);
      expect(list.head.value).toBe('test');
      expect(list.head.next.next).toBe(null);
    });

    it('returns true when finding a value within the linked list that exists', () => {
      expect(list.includes('test')).toBe(true);
    });

    it('returns false when searching for a value in the linked list that does not exist', () => {
      expect(list.includes('banana')).toBe(false);
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
      expect(list.toString()).toBe('test test-2 ');
    });
  });
});

