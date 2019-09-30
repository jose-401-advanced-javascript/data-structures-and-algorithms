const { LinkedList } = require('../linked-list');
const { mergeLists } = require('../ll-merge');

describe('merge lists', () => {

  const list1 = new LinkedList();
  list1.insert('1');
  list1.insert('3');
  list1.insert('2');

  const list2 = new LinkedList();
  list2.insert('5');
  list2.insert('9');
  list2.insert('4'); 

  const list3 = new LinkedList();
  list3.insert('1');
  list3.insert('3');


  const list4 = new LinkedList();
  list4.insert('5');
  list4.insert('9');
  list4.insert('4');  

  const list5 = new LinkedList();
  list5.insert('1');
  list5.insert('3');
  list5.insert('2');

  const list6 = new LinkedList();
  list6.insert('5');
  list6.insert('9');

  it('merges two lists of equal length', () => {
    const list = mergeLists(list1, list2);
    expect(list.head.value).toBe('1');
    expect(list.head.next.value).toBe('5');
    expect(list.head.next.next.value).toBe('3');
    expect(list.head.next.next.next.value).toBe('9');
    expect(list.head.next.next.next.next.value).toBe('2');
    expect(list.head.next.next.next.next.next.value).toBe('4');
  });

  it('merges two unequal lists', () => {
    const list = mergeLists(list3, list4);
    expect(list.head.value).toBe('1');
    expect(list.head.next.value).toBe('5');
    expect(list.head.next.next.value).toBe('3');
    expect(list.head.next.next.next.value).toBe('9');
    expect(list.head.next.next.next.next.value).toBe('4');

    const listB = mergeLists(list5, list6);
    expect(listB.head.value).toBe('1');
    expect(listB.head.next.value).toBe('5');
    expect(listB.head.next.next.value).toBe('3');
    expect(listB.head.next.next.next.value).toBe('9');
    expect(listB.head.next.next.next.next.value).toBe('2');
  });

});