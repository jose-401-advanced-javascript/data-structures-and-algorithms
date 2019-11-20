const { leftJoin } = require('../left-join');

const table1 = [
  ['fond', 'enamored'],
  ['wrath', 'anger'],
  ['diligent', 'employed'],
  ['outfit', 'garb'],
  ['guide', 'usher']
];

const table2 = [
  ['fond', 'averse'],
  ['wrath', 'delight'],
  ['diligent', 'idle'],
  ['guide', 'follow'],
  ['flow', 'jam']
];

const expected = [
  ['fond', 'enamored', 'averse'],
  ['wrath', 'anger', 'delight'],
  ['diligent', 'employed', 'idle'],
  ['outfit', 'garb', null],
  ['guide', 'usher', 'follow']
];

describe('Left Join', () => {
  it('can join two hashtables', () => {
    const output = leftJoin(table1, table2);
    expect(output).toEqual(expected);
  });
});
