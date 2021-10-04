import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 export default function getMatrixElementsSum(matrix) {
  let result = 0;
  let counter = 0;
  let innerLength = matrix[0].length;
  while (counter < innerLength) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][counter] !== 0) {
        result += matrix[i][counter];
      } else {
        break;
      }
    }
    counter++;
  }
  return result;
}
