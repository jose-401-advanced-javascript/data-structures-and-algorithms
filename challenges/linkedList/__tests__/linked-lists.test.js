const { LinkedList } = require('../linked-list');
const { Node } = require('../node-class');

describe('Linked list', () => {

  

  it('crates an empty linked list', () =>{
    const list1 = new LinkedList();
    expect(list1).toEqual({ head: null });
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

    // it('inserts after a node in the middle of the linked list', () => {
    //   console.log(list);
    //   // list.inserAfter('test-2', 'test-2.5');
    //   // expect(list.head.next.value).toBe('test-2.5');
    // });
      
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
});

