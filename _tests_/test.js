import hasDuplicate from '../src';

it('should work with a default `comparator`', async () => {
  expect(hasDuplicate([])).toBeFalsy();
  expect(hasDuplicate([1, 2, 3])).toBeFalsy();
  expect(hasDuplicate([1, 2, 3, 1])).toBeTruthy();
  expect(hasDuplicate([{ v: 1 }, 2, 3, { v: 1 }])).toBeTruthy();
});

it('should work with a custom `comparator`', async () => {
  expect(hasDuplicate([], () => true)).toBeFalsy();
  const comparator = (a, b) => a === b;
  expect(hasDuplicate([1, 2, 3], comparator)).toBeFalsy();
  expect(hasDuplicate([1, 2, 3, 1], comparator)).toBeTruthy();
  expect(hasDuplicate([{ v: 1 }, 2, 3, { v: 1 }], comparator)).toBeFalsy();
});
