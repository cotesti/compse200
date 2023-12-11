import isEmpty from "./COMP.SE.200-2023-2024-1-main/src/isEmpty"

describe('isEmpty', () => {
  test('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for non-object and non-array primitives', () => {
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  test('distinguishes between empty and non-empty arrays', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('distinguishes between empty and non-empty objects', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('handles array-like objects correctly', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(Buffer.alloc(10))).toBe(false);
  });

  test('handles Maps and Sets correctly', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
  });

  test('returns true for functions and other non-standard objects', () => {
    expect(isEmpty(function() {})).toBe(true);
  });
});
