import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 export default class DepthCalculator {
  calculateDepth(arr, baseDeep = 1) {
    let res = baseDeep;
    for (let j = 0; j < arr.length; j++) {
      if (Array.isArray(arr[j])) {
        let innerDeep = this.calculateDepth(arr[j], baseDeep + 1);
        if (innerDeep > res) res = innerDeep;
      }
    }
    return res;
  }
}
