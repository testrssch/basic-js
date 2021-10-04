import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
  let stack = [];
  if (typeof str !== 'string' || typeof options.addition !== 'string') {
    str += '';
    options.addition += '';
  }
  options.separator ? options.separator : (options.separator = '+');
  options.additionSeparator ? options.additionSeparator : (options.additionSeparator = '|');
  if (options.repeatTimes > 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      let innerStack = [];
      if (options.addition !== 'undefined') {
        if (options.additionRepeatTimes > 0) {
          for (let j = 0; j < options.additionRepeatTimes; j++) {
            innerStack.push(options.addition);
          }
          stack.push(str + innerStack.join(options.additionSeparator));
        } else {
          stack.push(str + options.addition);
        }
      } else {
        stack.push(str);
      }
    }
  } else {
    let innerStack = [];
    if (options.additionRepeatTimes > 0) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        innerStack.push(options.addition);
      }
      stack.push(str + innerStack.join(options.additionSeparator));
    } else {
      stack.push(str + options.addition);
    }
  }
  return stack.join(options.separator);
}