const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const CIPHER = 'oephjizkxdawubnytvfglqsrcm';

module.exports = function atbash(text, encrypt = false) {
  let result = '';

  const TOTEXT = encrypt ? CIPHER : ALPHABET;
  const FROMTEXT = encrypt ? ALPHABET : CIPHER;

  for (let i = 0, leng = text.length; i < leng; i++) {
    const letterIndex = FROMTEXT.indexOf(text[i].toLowerCase());
    if (letterIndex === -1) {
      result += text[i];
      continue;
    }
    result += TOTEXT[letterIndex];
  }

  return result;
};
