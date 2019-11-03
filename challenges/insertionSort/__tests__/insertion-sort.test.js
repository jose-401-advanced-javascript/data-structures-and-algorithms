const { insertionSort } = require('../insertion-sort');

describe('insertion sort', () => {
  const arr1 = [2, 3, 5, 7, 1];

  it('shifts an array', () => {
    const sortedArr = insertionSort(arr1);
    console.log(sortedArr);
  });
});