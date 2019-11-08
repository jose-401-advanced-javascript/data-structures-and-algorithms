const { quickSort } = require('../quick-sort');
describe('Quick sort', () => {

  it('can merge an odd array', () => {
    const arr = [2, 91, 12, 27, 19, 6, 72];
    const left = 0;
    const right = arr.length - 1;
    quickSort(arr, left, right);
    expect(arr).toEqual([2, 6, 12, 19, 27, 72, 91]);
  });

  it('an merge an even array', () => {
    const arr = [2, 91, 12, 27, 19, 6];
    const left = 0;
    const right = arr.length - 1;
    quickSort(arr, left, right);
    expect(arr).toEqual([2, 6, 12, 19, 27, 91]);
  });

});