const { mergeSort } = require('../merge-sort');

describe('merge sort', () => {
  it('can merge an even array', () => {
    const evenArr = [2, 91, 12, 27, 19, 6];
    mergeSort(evenArr);
    expect(evenArr).toEqual([2, 6, 12, 19, 27, 91]);
  });

  it('can merge an odd array', () => {
    const evenArr = [2, 91, 12, 27, 19, 6, 72];
    mergeSort(evenArr);
    expect(evenArr).toEqual([2, 6, 12, 19, 27, 72, 91]);
  });
});