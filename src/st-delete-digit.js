import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) {
  n += '';
  n = n.split('').map(item => +item);
  let min = 0;
  let finder = true;
  while (finder) {
    for (let i = 0; i < n.length; i++) {
      if (min === n[i]) {
        n.splice(i, 1);
        finder = false;
        break;
      }
    }
    min++;
  }
  return +n.join('');
}