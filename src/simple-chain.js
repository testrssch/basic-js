import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
 export default {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === '') {
      this.result.push('( )');
    }
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      this.result[position - 1] === undefined
    ) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let res = this.result.join('~~');
    this.result = [];
    return res;
  },
};
