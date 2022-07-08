const { numToWords } = require("./number");

test('thirty million ninety one thousand eight hundred ninety five', () => {
    expect(numToWords("30091895")).toBe('thirty million ninety one thousand eight hundred ninety five')
});