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

  getWord(){
    return this.#word;
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

function drawGame(){
  document.getElementById("masked_word").textContent = game.getMaskedWord();
  document.getElementById("hangman_image").src=`images/wave${game.getWrongGuessCount()}.jpeg`;
  document.getElementById("hangman_image").animate(
    { opacity: [0, 1]},
    { duration: 600});
}

let game;
let wordList;

function buildLetterButtons(){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let buttonOutput = "";
  for (let i=0; i < alphabet.length; i++){
    buttonOutput += `<button type="button" class="button" data-letter="${alphabet[i]}">${alphabet[i]}</button>`
  }
  document.getElementById("letters").innerHTML = buttonOutput;
}

function handleLetterClick(event){
  if (event.target.tagName !== "BUTTON"){
    return;
  }
  const letter = event.target.dataset.letter;

  game.guessLetter(letter);
  event.target.disabled = true;
  drawGame();
  showResult();
}

document.getElementById("letters").addEventListener("click", handleLetterClick);
document.getElementById("play_again").addEventListener("click", startNewGame);
document.getElementById("hint_button").addEventListener("click", ()=>{
  document.getElementById("hangman_hint").textContent = game.getHint();
});


// LLM-assisted - Claude, Anthropic, November 2026
function showResult(){
  const resultBox = document.getElementById("result");
  if (game.isWon()){
    resultBox.textContent = "You won! The wave passed and your camera is safe.";
  } else if (game.isLost()){
    resultBox.textContent = `You lost. The wave got your camera. The word was ${game.getWord()}.`;
  } else {
    return;
  }
  document.querySelectorAll("#letters button").forEach(button => {
    button.disabled = true;
  });
  document.getElementById("play_again").hidden = false;
}
// End LLM-assisted

function startNewGame(){
  const index = Math.floor(Math.random() * wordList.length);
  const chosenWord = wordList[index];
  game = new Game(chosenWord.word, chosenWord.hint);
  drawGame();
  buildLetterButtons();
  document.getElementById("result").textContent = "";
  document.getElementById("hangman_hint").textContent = "";
  document.getElementById("play_again").hidden = true;
}

fetch("data/words.json")
.then(response => response.json())
.then(words => {
  wordList = words;
  startNewGame();
});
