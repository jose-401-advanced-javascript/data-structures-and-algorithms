const { LinkedList } = require('../linked-list');

describe('Linked list', () => {

  

  it('crates an empty linked list', () =>{
    const list = new LinkedList();
    expect(list).toEqual({ head: null });
    console.log(list.insert('test'));
  });

  describe('insert', () => {

    const list = new LinkedList();
    list.insert('test');
    const obj = {
      head: { 
        'next': null,
        'value': 'test'
      } 
    };
    it('inserts node into linked list', () => {
      expect(list).toEqual(obj);
    });
  });
});

