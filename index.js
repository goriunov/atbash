const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const CIPHER = 'oephjizkxdawubnytvfglqsrcm';

module.exports = function atbash(text, encrypt = false) {
  let result = '';

  const toText = encrypt ? CIPHER : ALPHABET;
  const fromText = encrypt ? ALPHABET : CIPHER;

  // version 1
  // for (let i = 0, leng = text.length; i < leng; i++) {
  //   const letterIndex = fromText.indexOf(text[i].toLowerCase());
  //   if (letterIndex === -1) {
  //     result += text[i];
  //     continue;
  //   }
  //   result += toText[letterIndex];
  // }

  // version 2
  // for (let i = 0, leng = text.length; i < leng; i++) {
  //   result += toText[fromText.indexOf(text[i].toLowerCase())] || text[i];
  // }

  // Version 3
  for (let letter of text) result += toText[fromText.indexOf(letter.toLowerCase())] || letter;

  return result;
}
