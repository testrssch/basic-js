import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine(str) {
  let stack = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else if (str[i] !== str[i + 1] && counter > 1) {
      stack.push(counter + str[i]);
      counter = 1;
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join('');
}
