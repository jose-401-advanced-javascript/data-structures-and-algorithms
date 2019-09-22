const { addFirst } = require('../array-shift');

describe('array shift', () => {
  const arr1 = [1, 2, 3, 4];
  const numb1 = 5;

  it('shifts items in the array', () =>{
    expect(addFirst(arr1, numb1)).toEqual([5, 1, 2, 3, 4]);
  });
});