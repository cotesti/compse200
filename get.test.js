import get from "./COMP.SE.200-2023-2024-1-main/src/get";

test('get works with a simple nested object', () => {
    expect(get({'a':{'b':{'c':{'d':10}}}},"a.b.c.d")).toStrictEqual(10);
  });

  test('get works with a empty object', () => {
    expect(get({},"a.b.c.d")).toStrictEqual(undefined);
  });

  test('get works with a empty value', () => {
    expect(get()).toStrictEqual(undefined);
  });

  test('get works with a default return value', () => {
    expect(get({},"a.b.c.d","Nothing here!")).toStrictEqual("Nothing here!");
  });