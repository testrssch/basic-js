import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 export default function minesweeper(matrix) {
  let newMatrix = matrix.slice();
  newMatrix = newMatrix.map(item => item.map(el => (el = 0)));
  const val = 2;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = i - 1; k < val; k++) {
        for (let l = j - 1; l < val; l++) {
          if (k >= 0 && l >= 0) {
            if (i === k && j === l) {
              newMatrix[i][j] += 0;
              continue;
            } else if (matrix[k][l] === true) {
              newMatrix[i][j] += 1;
            } else {
              newMatrix[i][j] += 0;
            }
          } else {
            continue;
          }
        }
      }
    }
  }
  return newMatrix;
}