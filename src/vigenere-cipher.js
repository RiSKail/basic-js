class VigenereCipheringMachine {
  constructor(reverse) {
    if (reverse === false) this.reverse = false;
    else this.reverse = true;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.len = this.alphabet.length;
  }

  encrypt(word, keyword) {
    let keyPos = 0, encryptWord = "";
    if (!word || !keyword) throw new Error("Error");

    word = word.toUpperCase();
    keyword = keyword.toUpperCase();

    for (var i = 0; i < word.length; i++) {

      if (this.alphabet.indexOf(word[i]) === -1) {
        encryptWord += word[i];
      } else {
        encryptWord += this.alphabet[
          (this.alphabet.indexOf(word[i]) + this.alphabet.indexOf(keyword[keyPos])) %
          26
        ];
        keyPos = ++keyPos % keyword.length;
      }

    }

    if (!this.reverse) return encryptWord.split('').reverse().join('');
    return encryptWord;
  }

  decrypt(word, keyword) {
    let keyPos = 0, decryptWord = "";
    if (!word || !keyword) throw new Error("Error");

    word = word.toUpperCase();
    keyword = keyword.toUpperCase();

    for (var i = 0; i < word.length; i++) {
      if (this.alphabet.indexOf(word[i]) === -1) {
        decryptWord += word[i];
      } else {
        let position =
          this.alphabet.indexOf(word[i]) - this.alphabet.indexOf(keyword[keyPos]);
        if (position < 0) position += 26;
        decryptWord += this.alphabet[position];

        keyPos = ++keyPos % keyword.length;
      }
    }

    if (!this.reverse) return decryptWord.split('').reverse().join('');
    return decryptWord;

  }
}

module.exports = VigenereCipheringMachine;
