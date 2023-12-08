import ceil from "./COMP.SE.200-2023-2024-1-main/src/ceil"


test('rounds a float to a integer', () => {
    expect(ceil(1.5)).toStrictEqual(2);
  });

  test('rounds a float to a integer with specification', () => {
    expect(ceil(1.50001,2)).toStrictEqual(1.51);
  });

  test('rounds a float to a integer with negative specification', () => {
    expect(ceil(15001,-2)).toStrictEqual(15100);
  });

  test('rounds a zero to a integer with specification', () => {
    expect(ceil(0,2)).toStrictEqual(0);
  });