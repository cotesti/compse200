import upperFirst from "./COMP.SE.200-2023-2024-1-main/src/upperFirst";

test('converts the first letter to uppercase', () => {
    expect(upperFirst("hello world!")).toBe("Hello world!");
  });