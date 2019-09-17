const reverseArray = require('../array-shift.js');

describe('reverses the order of any array', () => {
    const arr1 = [1, 2, 3, 4, 5, 6]

    it('reverses the first array', () => {
        expect(reverseArray.reverseArray(arr1))
    })
})