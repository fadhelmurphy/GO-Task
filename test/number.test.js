const numToWords = require("../functions/numToWords");

test('expect : thirty million ninety one thousand eight hundred ninety five', () => {
    expect(numToWords("30091895")).toBe('thirty million ninety one thousand eight hundred ninety five')
});

test('expect : one thousand nine hundred ninety nine', () => {
    expect(numToWords("1999")).toBe('one thousand nine hundred ninety nine')
});