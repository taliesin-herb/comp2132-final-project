console.log("loaded");

class Game {
  #word;
  #hint;
  #guessedLetter;
  #wrongGuessCount;
  

  constructor(word, hint){
    this.#word = word;
    this.#hint = hint;
    this.#guessedLetter = [];
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
      if (this.#guessedLetter.includes(this.#word[i])){
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
      if (!this.#guessedLetter.includes(this.#word[i])){
        return false;
      }
    }
    return true;
  }

  guessLetter(letter){
    const guess = letter.toLowerCase();
    if (this.isWon() || this.isLost() ) { return false;};
    if (this.#guessedLetter.includes(guess)){return false};
    this.#guessedLetter.push(guess);
    if (!this.#word.includes(guess)){
      this.#wrongGuessCount++;
      return false;
    }
    return true;
  }

}

fetch("data/words.json")
.then(response => response.json())
.then(words => {
  const index = Math.floor(Math.random() * words.length);
  const chosenWord = words[index];
  console.log(chosenWord)
});
