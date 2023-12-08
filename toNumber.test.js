import toNumber from "./COMP.SE.200-2023-2024-1-main/src/toNumber";

test('converts a negative number to a number ', () => {
    expect(toNumber(-5)).toBe(-5);
  });

test('converts a string of a negative number to a number ', () => {
    expect(toNumber("-5")).toBe(-5);
  });

test('does not crash when converting a symbol', () => {
    expect(toNumber(Symbol("9"))).toBe(0/0);
  });


test('does not crash when converting an boolean', () => {
    expect(toNumber(null)).toBe(0);
  });

  var bin = "0b1111";    // bin will be set to 15
  var hex = "+0xF"
  var oct = "0o17"
  test('does not crash when converting a binary', () => {
    expect(toNumber(oct)).toBe(15);
  });
  test('does not crash when converting a binary', () => {
    expect(toNumber(bin)).toBe(15);
  });
  test('does not crash when converting a binary', () => {
    expect(toNumber(hex)).toBe(NaN);
  });

 function func()
 {
    return func
 }

  test('does not crash when converting an object', () => {
    expect(toNumber(func())).toBe(5);
  });
  
test('does not crash when converting an object', () => {
    expect(toNumber({'value': 5 })).toBe(0/0);
  });

  test('does not crash when converting a binary', () => {
    expect(toNumber(new Number(10))).toBe(10);
  });  
  
  test('does not crash when converting a binary', () => {
    expect(toNumber(new Number())).toBe(0);
  });