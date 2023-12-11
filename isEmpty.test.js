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
    expect(isEmpty(new Uint8Array)).toBe(true)
  });

  test('distinguishes between empty and non-empty objects', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty(function() { return arguments }())).toBe(true);
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

  test('distinguishes between empty and non-empty prototype objects', () => {
    expect(isEmpty(Object.prototype)).toBe(true);
    const customPrototype = Object.create(Object.prototype);
    customPrototype.foo = 'bar';
    expect(isEmpty(customPrototype)).toBe(false);
  });

  test('should return true for objects with multiple prototype properties', () => {
    const prototype1 = { foo: 'bar' };
    const prototype2 = { baz: 'qux' };
    const object = {};
    Object.setPrototypeOf(object, prototype1);
    Object.setPrototypeOf(prototype1, prototype2);
    expect(isEmpty(object)).toBe(true);
  });
  
});
