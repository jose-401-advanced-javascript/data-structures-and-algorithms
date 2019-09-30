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

  console.log(mergeLists(list1, list2));

  it('merges two lists of equal length', () => {
    const list = mergeLists(list1, list2);
    expect(list.head.value).toBe('1');
    expect(list.head.next.value).toBe('5');
    expect(list.head.next.next.value).toBe('3');
    expect(list.head.next.next.next.value).toBe('9');
    expect(list.head.next.next.next.next.value).toBe('2');
    expect(list.head.next.next.next.next.next.value).toBe('4');
  });

});