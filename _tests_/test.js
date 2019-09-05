import hasDuplicates from '../src';

it('should work with a default `comparator`', async () => {
  expect(hasDuplicates([])).toBeFalsy();
  expect(hasDuplicates([1, 2, 3])).toBeFalsy();
  expect(hasDuplicates([1, 2, 3, 1])).toBeTruthy();
  expect(hasDuplicates([{ v: 1 }, { v: 1 }])).toBeTruthy();
  expect(hasDuplicates([{ v: 1 }, { v: 2 }])).toBeFalsy();
});

it('should work with a custom `comparator`', async () => {
  expect(hasDuplicates([], () => true)).toBeFalsy();
  const comparator = (a, b) => a === b;
  expect(hasDuplicates([1, 2, 3], comparator)).toBeFalsy();
  expect(hasDuplicates([1, 2, 3, 1], comparator)).toBeTruthy();
  expect(hasDuplicates([{ v: 1 }, { v: 1 }], comparator)).toBeFalsy();
});
