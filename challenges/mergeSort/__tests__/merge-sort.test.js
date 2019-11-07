const { mergeSort } = require('../merge-sort');

describe('merge sort', () => {
  it('can merge an even array', () => {
    const arr = [2, 91, 12, 27, 19, 6];
    mergeSort(arr);
    expect(arr).toEqual([2, 6, 12, 19, 27, 91]);
  });

  it('can merge an odd array', () => {
    const arr = [2, 91, 12, 27, 19, 6, 72];
    mergeSort(arr);
    expect(arr).toEqual([2, 6, 12, 19, 27, 72, 91]);
  });
});