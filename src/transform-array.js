import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 export default function transform(arr) {
  let stack = [];
  const params = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      continue;
    } else if (arr[i] === '--discard-prev') {
      if (i === 0 || arr[i - 2] === '--discard-next') {
        continue;
      }
      stack.pop();
    } else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
      stack.push(arr[i + 1]);
    } else if (
      arr[i] === '--double-prev' &&
      arr[i - 1] !== undefined &&
      arr[i - 2] !== '--discard-next'
    ) {
      stack.push(arr[i - 1]);
    }
    stack.push(arr[i]);
  }
  return stack.filter(item => item !== undefined && !params.includes(item));
}