const { findNum } = require('../array-binary-search');

describe('binary search', () =>{
  const arr1 = [4, 8, 15, 16, 23, 42];
  const num1 = 15;
  const arr2 = [11, 22, 33, 44, 55, 66, 77];
  const num2 = 90;

  it('provides the index where the number is found', () =>{
    expect(findNum(arr1, num1)).toBe(2);
  });

  it('can tell the number is not in the array', () =>{
    expect(findNum(arr2, num2)).toBe(-1);
  });
});