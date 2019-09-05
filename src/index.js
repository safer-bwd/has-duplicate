import isEqual from 'lodash.isequal';
import findIndexesOfDuplicates from 'find-indices-of-duplicates';

export default (array, comparator = isEqual) => {
  if (array.length === 0) {
    return false;
  }

  const duplicates = findIndexesOfDuplicates(array, comparator, {
    onlyFirst: true
  });

  return duplicates.length > 0;
};
