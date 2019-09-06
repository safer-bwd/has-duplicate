import isEqual from 'lodash.isequal';
import findIndexesOfDuplicates from 'find-indices-of-duplicates';

/**
 * @name has-duplicate
 * @param {Array} array The array to check
 * @param {Function} [comparator=lodash.isequal] The compare function
 * @return {boolean} True if has duplicates and false otherwise
 * @example
 * import hasDuplicates from 'has-duplicate';
 *
 * hasDuplicates([1, 2, 3]); // false
 * hasDuplicates([1, 2, 3, 1]); // true
 * hasDuplicates([{ v: 1 }, { v: 1 }]); // true
 * hasDuplicates([{ v: 1 }, { v: 2 }]); // false
 * hasDuplicates([{ v: 1 }, { v: 1 }], (a, b) => a === b); // false
 */
export default (array, comparator = isEqual) => {
  if (array.length === 0) {
    return false;
  }

  const duplicates = findIndexesOfDuplicates(array, comparator, {
    onlyFirst: true
  });

  return duplicates.length > 0;
};
