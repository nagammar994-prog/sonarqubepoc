const calculate = require('../src/calculate');

test('calculate', () => {
    expect(calculate([1,2])).toBe(6);
});
