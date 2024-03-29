const { LinkedList } = require('../linked-list');
const { Node } = require('../node-class');

describe('Linked list', () => {

  

  it('crates an empty linked list', () =>{
    const list1 = new LinkedList();
    expect(list1).toEqual({ head: null, size: 0 });
  });

  describe('insert', () => {

    const list = new LinkedList();

    list.insert('test');
    list.insert('test-2');
    list.insert('test-3');
  
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
      expect(list.head.next.next.next).toBe(null);
    });

    it('returns true when finding a value within the linked list that exists', () => {    
      expect(list.includes('test')).toBe(true);
      expect(list.includes('test-2')).toBe(true);
      expect(list.includes('test-3')).toBe(true);
    });

    it('returns false when searching for a value in the linked list that does not exist', () => {
      expect(list.includes('banana')).toBe(false);
    });

    it('can properly return a collection of all the values that exist in the linked list', () => {
      expect(list.toString()).toBe('test test-2 test-3 '); 
    });

    it('inserts a node before a node located in the middle of a linked list', () => {      
      list.insertBefore('test-3', 'test-2.5');      
      expect(list.head.next.next.value).toBe('test-2.5');  
    });

    it('inserts after a node in the middle of the linked list', () => {
      list.insertAfter('test-2', 'test-2.5');
      expect(list.head.next.next.value).toBe('test-2.5');
    });
      
  });

  describe('append', () => {
    
    const list = new LinkedList();
    list.insert('test');
    list.insert('test-2');
    list.append('test-3');
    it('It replaces the head of the node', () => {
      expect(list.head).toBeInstanceOf(Node);
      expect(list.head.value).toBe('test-3');
    });
  });

  describe('count from the end', () => {

    const list = new LinkedList();

    list.insert('test');
    list.insert('test-2');
    list.insert('test-3');
    list.insert('test-4');
 
    it('outputs a message if the value is longer than the size of the list', () => {
      const result = list.countFromTheEnd(5);
      expect(result).toBe('There are not enough nodes in the list');
    });

    it('outputs a message if the value is 0', () => {
      const result = list.countFromTheEnd(-1);
      expect(result).toBe('Input needs to be a positive integer');
    });

    it('returns the 0th value from the end', () => {
      const result = list.countFromTheEnd(0);
      expect(result).toBe('test-4');
    });

    it('returns the correct "th" value form the end', () => {
      const result1 = list.countFromTheEnd(1);
      const result2 = list.countFromTheEnd(2);
      const result3 = list.countFromTheEnd(3);
      expect(result1).toBe('test-3');
      expect(result2).toBe('test-2');
      expect(result3).toBe('test');
    });

  });
});

