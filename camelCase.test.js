import camelCase from "./COMP.SE.200-2023-2024-1-main/src/camelCase"

test('converts simple string to camel case', () => {
    expect(camelCase('Foo Bar')).toBe(' fooBar');
  });
  
  test('converts hyphenated string to camel case', () => {
    expect(camelCase('--foo-bar--')).toBe(' fooBar');
  });
  
  test('converts underscored string to camel case', () => {
    expect(camelCase('__FOO_BAR__')).toBe(' fooBar');
  });
  
  test('handles empty string input', () => {
    expect(camelCase('')).toBe(' ');
  });
  