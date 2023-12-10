import toString from "./COMP.SE.200-2023-2024-1-main/src/toString";

test('converts a number to string', () => {
    expect(toString(5)).toStrictEqual("5");
  });

  test('converts a string to string', () => {
    expect(toString("5")).toStrictEqual("5");
  });

  test('converts an array of strings to string', () => {
    expect(toString([1,2,3,4,5])).toStrictEqual("1,2,3,4,5");
  });

  test('converts an array of things to string', () => {
    expect(toString([1,"2",null,true])).toStrictEqual("1,2,,true");
  });

  test('converts a symbol to string', () => {
    expect(toString(Symbol(1))).toStrictEqual(Symbol(1).toString());
  });

  test('converts a number to string', () => {
    expect(toString(0)).toStrictEqual("0");
  });

  test('takes in consideration the -0 (does not just return 0)', () => {
    expect(toString(-0)).toStrictEqual("-0");
  });