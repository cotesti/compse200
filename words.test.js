import words from "./COMP.SE.200-2023-2024-1-main/src/words";

test('splices sentences to arrays correctly', () => {
    expect(words("Hello world")).toStrictEqual(['Hello','world']);
  });

test('splices sentences to arrays correctly without taking in special characters', () => {
    expect(words("Hello & world !!!")).toStrictEqual(['Hello','world']);
  });

  test('splicing works when having nothing to return with pattern', () => {
    expect(words("unfortunate",/d/)).toStrictEqual([]);
  });

  test('splicing works when having nothing to return', () => {
    expect(words("")).toStrictEqual([]);
  });

  test('splicing works with special characters', () => {
    expect(words("我怎么 过去")).toStrictEqual(['我怎么','过去']);
  });

test('splicing works with patterns', () => {
    expect(words("Hello & world !!!",/o/g)).toStrictEqual(["o","o"]);
  });