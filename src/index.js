import isEqual from 'lodash.isequal';
import findIndexesOfDuplicates from 'find-indices-of-duplicates';

/**
 * @name has-duplicate
 * @param {Array} array The array to check
 * @param {Function} [comparator=lodash.isequal] The compare function
 * @return {boolean} True if has duplicates and false otherwise
 * @example
 * import hasDuplicates from 'has-duplicate';
 * */
export default (array, comparator = isEqual) => {
  if (array.length === 0) {
    return false;
  }

  const duplicates = findIndexesOfDuplicates(array, comparator, {
    onlyFirst: true
  });

  return duplicates.length > 0;
};
