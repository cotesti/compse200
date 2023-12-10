import isLength from "./COMP.SE.200-2023-2024-1-main/src/isLength"

test('recognizes a correct length', () => {
    expect(isLength(["I","am","tested"].length)).toBe(true);
  });

test('recognizes a false length', () => {
    expect(isLength(["I","am","tested"].length/2)).toBe(false);
  });