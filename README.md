# Wavebreak--README
Wavebreak is a spin on the classic hangman game. Using JavaScript and photos I took at Tower Beach (Vancouver, Canada), I've simulated a situation where dry gear is contingent on correct guesses. Guess the word with enough tries, and your gear is fine. Fail, and everything gets wet.

# How to play
Wavebreak features a hidden word, a hint button, and a keyboard. You can click on the hint button whenever you wish. To make a letter guess, click on a letter. If it's right, it will fill a space (or more) on the hidden word line. If not, the waves will get closer. Clicking on a letter disables it, so you don't need to worry about clicking a letter twice. If you fail (or win), press the "Play again" button to reset the game.

# How to run it
The game runs with the help of a JSON file, so it will not run by simply clicking index.html. The game must be served over HTTP:MAMP with the Document root set to the project folder. Once the path is established, open it with http://localhost:8888/ or Visual Studio Code's Live server.

# Technologies used
This game was designed using HTML, CSS compiled from a SASS, JavaScript, fetch API, and JSON

# Project structure
```
comp2132-final-project/
├── index.html
├── README.md
├── css/
│   ├── style.css            (compiled from scss/style.scss)
│   ├── style.css.map
│   └── style_with_normalize.css
├── data/
│   └── words.json
├── images/
│   ├── wave0.jpeg
│   ├── ...
│   └── wave6.jpeg
├── scripts/
│   └── project_script.js
└── scss/
    └── style.scss
```

# How it meets the brief
- Own object: the Game class
- Own function: buildLetterButtons(), drawGAme(), handleLetterClick(), startNewGame()
- JSON and fetch: data/words.json
- SASS mixin: button-style
- JS animation: animate() in drawGame()

# Credits and LLM assistance
Calude wrote showResult() and the SASS button-style mixin, which are annotated in the code with LLM-assisted comments. Claude also helped with debugging and explaining concepts. All other code was written by me.

# Author
Taliesin Herb

# comp2132-final-project
JavaScript Final project