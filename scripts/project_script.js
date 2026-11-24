console.log("loaded");

class Game {
  #word;
  #hint;
  #guessedLetters;
  #wrongGuessCount;
  

  constructor(word, hint){
    this.#word = word;
    this.#hint = hint;
    this.#guessedLetters = [];
    this.#wrongGuessCount = 0;
  }

  getHint(){
    return this.#hint;
  }

  getWrongGuessCount(){
    return this.#wrongGuessCount;
  }

  getMaskedWord(){
    let wordOutput = "";
    for (let i=0; i < this.#word.length; i++){
      if (this.#guessedLetters.includes(this.#word[i])){
        wordOutput += this.#word[i]
      }
      else {
        wordOutput += "_"
      }
    }
    return wordOutput;
  }

  isLost(){
    if  (this.#wrongGuessCount >= 6){
      return true;
    }
    return false;
  }

  isWon(){
    for (let i=0; i < this.#word.length; i++){
      if (!this.#guessedLetters.includes(this.#word[i])){
        return false;
      }
    }
    return true;
  }

}