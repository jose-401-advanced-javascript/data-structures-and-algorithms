const { LinkedList } = require('./linked-list');

const mergeLists = (list1, list2) => {

  const newList = new LinkedList();
  let current1 = list1.head;  
  let current2 = list2.head;

  let timer = isLonger(list1, list2);
  while(timer > 0) {
    if(current1){
      newList.insert(current1.value);
      current1 = current1.next;
    }
    
    if(current2){
      newList.insert(current2.value);
      current2 = current2.next;
    }
    timer--;    
  }
  return newList;
};

const isLonger = (list1, list2) => list1.size >= list2.size ? list1.size : list2.size;

module.exports = { mergeLists };