import filter from "./COMP.SE.200-2023-2024-1-main/src/filter"

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false },
    { 'user': 'charlie', 'active': true },
    { 'user': 'brian',   'active': false }
    ]

test('finds all active users', () => {
    expect(filter(users,({active}) => active)).toStrictEqual([{ 'user': 'barney', 'active': true },{ 'user': 'charlie', 'active': true }]);
  });

test('can handle empty inputs', () => {
    expect(filter([],({active}) => active)).toStrictEqual([[]]);
  });

  test('can handle null input', () => {
    expect(filter(null,({active}) => active)).toStrictEqual([[]]);
  });