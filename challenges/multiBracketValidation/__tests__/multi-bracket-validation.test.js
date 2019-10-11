const { multiBracketValidation } = require('../multi-bracket-validation');

describe('function checks for bracket balance', () => {

  it('returns true for balance brackets', () => {
    const case1 = '{}';
    const case2 = '{}(){}';
    const case3 = '()[[Extra Characters]]';
    const case4 = '(){}[[]]';
    const case5 = '{}{Alchemy}[Code]((Lab))';
    expect(multiBracketValidation(case1)).toBe(true);
    expect(multiBracketValidation(case2)).toBe(true);
    expect(multiBracketValidation(case3)).toBe(true);
    expect(multiBracketValidation(case4)).toBe(true);
    expect(multiBracketValidation(case5)).toBe(true);
  });

  it('returns false for unbalanced brackets', () => {
    const case1 = '[({}]';
    const case2 = '(](';
    // const case3 = '{(})';
    expect(multiBracketValidation(case1)).toBe(false);
    expect(multiBracketValidation(case2)).toBe(false);
    // expect(multiBracketValidation(case3)).toBe(false);
  });
});