import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 export default class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    let messageUC = message
      .toUpperCase()
      .split('')
      .map(item => (this.alphabet.includes(item) ? item : ''))
      .join('');
    let keyUC = key.toUpperCase();

    let newMessage = message.toUpperCase().split('');
    let newKey = ''.padStart(messageUC.length, keyUC);

    let codeOfMessage = messageUC.split('').map(item => this.alphabet.indexOf(item, 0));
    let codeOfKey = newKey.split('').map(item => this.alphabet.indexOf(item, 0));
    let codeForEncrypt = [];

    for (let i = 0; i < codeOfMessage.length; i++) {
      if (codeOfMessage[i] + codeOfKey[i] >= this.alphabet.length) {
        let val = codeOfMessage[i] + codeOfKey[i] - this.alphabet.length;
        codeForEncrypt.push(val);
      } else {
        codeForEncrypt.push(codeOfMessage[i] + codeOfKey[i]);
      }
    }

    codeForEncrypt = codeForEncrypt.map(item => this.alphabet[item]);
    for (let i = 0; i < newMessage.length; i++) {
      if (!this.alphabet.includes(newMessage[i])) {
        codeForEncrypt.splice(i, 0, newMessage[i]);
      }
    }

    if (this.direct === false) {
      return codeForEncrypt.reverse().join('');
    }
    return codeForEncrypt.join('');
  }
  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    let encryptedMessageUC = encryptedMessage
      .toUpperCase()
      .split('')
      .map(item => (this.alphabet.includes(item) ? item : ''))
      .join('');
    let keyUC = key.toUpperCase();

    let newEncryptedMessage = encryptedMessage.toUpperCase().split('');
    let newKey = ''.padStart(encryptedMessageUC.length, keyUC);

    let codeOfMessage = encryptedMessageUC.split('').map(item => this.alphabet.indexOf(item, 0));
    let codeOfKey = newKey.split('').map(item => this.alphabet.indexOf(item, 0));
    let codeForDecrypt = [];

    for (let i = 0; i < codeOfMessage.length; i++) {
      if (codeOfMessage[i] - codeOfKey[i] < 0) {
        let val = codeOfMessage[i] + this.alphabet.length - codeOfKey[i];
        codeForDecrypt.push(val);
      } else {
        codeForDecrypt.push(codeOfMessage[i] - codeOfKey[i]);
      }
    }
    codeForDecrypt = codeForDecrypt.map(item => this.alphabet[item]);

    for (let i = 0; i < newEncryptedMessage.length; i++) {
      if (!this.alphabet.includes(newEncryptedMessage[i])) {
        codeForDecrypt.splice(i, 0, newEncryptedMessage[i]);
      }
    }

    if (this.direct === false) {
      return codeForDecrypt.reverse().join('');
    }
    return codeForDecrypt.join('');
  }
}
