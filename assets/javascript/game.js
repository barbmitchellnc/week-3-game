var hangmanGame = {
  
  computerChoice: "danerys",
  playerGuesses: [],
  guessesLeft: 10,
  correctGuesses: [],
  wins: 0,
  losses: 0,
  // function to see if the letter is a correct guess
  guessLetter: function(letter) {
    // check to see if they've guess it already
    //   if yes, exit
    //   else
    //     see if it's in my computerChoice (this.computerChoice)
    //     decrement guesses left
    //     if everything guessed
    //        winner!
    //  
    if(letter === this.playerGuesses[0] || letter === this.playerGuesses[1]
       || letter === this.playerGuesses[2] || letter === this.playerGuesses[3]
       || letter === this.playerGuesses[4]){
       return;
    } 
    // see if letter is in the word
    else{
      if(letter === this.computerChoice.charAt(0)){
        // put letter in correct guesses array
        this.correctGuesses[0] = letter;
        document.getElementById("1st").innerHTML = letter;
      }
      if(letter === this.computerChoice.charAt(1)){
        this.correctGuesses[1] = letter;
        document.getElementById("2nd").innerHTML = this.correctGuesses[1];
      }
      if(letter === this.computerChoice.charAt(2)){
        this.correctGuesses[2] = letterTheyChose;
        document.getElementById("3rd").innerHTML = this.correctGuesses[2];
      }
      if(letter === this.computerChoice.charAt(3)){
        this.correctGuesses[3] = letter;
        document.getElementById("4th").innerHTML = this.correctGuesses[3];
      }
      if(letter === this.computerChoice.charAt(4)){
        this.correctGuesses[4] = letter;
        document.getElementById("5th").innerHTML = this.correctGuesses[4];
      }
      // put letter guessed into playerGuesses array
      this.playerGuesses.push(letter);
      this.guessesLeft--;
    }
    //see if word is guessed
    if(this.correctGuesses[0]=== this.computerChoice.charAt(0) && this.correctGuesses[1]=== this.computerChoice.charAt(1)
      && this.correctGuesses[2]=== this.computerChoice.charAt(2)  && this.correctGuesses[3]=== this.computerChoice.charAt(3)
      && this.correctGuesses[4]=== this.computerChoice.charAt(4)){
      this.wins++;
      // reset guessesLeft to 10
      this.guessesLeft = 10;
      // reset playerGuesses and correctGuesses to clear
      this.playerGuesses = [];
      this.correctGuesses = [];
      var namesArray = ["bran","nightking", "danerys", "jonsnow"];
      this.computerChoice = [Math.floor(Math.random() * namesArray.length)];

    }
    // see if player lost
    if(this.guessesLeft === 0){
      this.losses++;
      // reset guessesLeft to 10
      this.guessesLeft = 10;
      // reset playerGuesses and correctGuesses to clear
      this.playerGuesses = [];
      this.correctGuesses = [];
      var namesArray = ["bran","nightking", "danerys", "jonsnow"];
      this.computerChoice = coachesArray[Math.floor(Math.random() * namesArray.length)];
    }
  }
}

// function runs when player presses a key
document.onkeyup = function(event) {
  hangmanGame.guessLetter(event.key);
  // display game status
  // HTML that will be injected into "game" div and displayed on the page.
          var html = "<h2>Press any key to guess</h2>"+
                      "<p>Wins:  " + hangmanGame.wins + "</p>"+
                      "<p>Losses:  " + hangmanGame.losses + "</p>"+
                      "<p>Current Word:  " + hangmanGame.correctGuesses.join(" ") + "</p>"+
                      
                      "<p>                    _ _ _ _ _ _    </p>"+
                      "<p>Guesses remaining: " + hangmanGame.guessesLeft + "</p>"+
                      "<p>Letters already guessed:  " + hangmanGame.playerGuesses + "</p>";

          // Injecting the HTML into "game" div and updating the game information 
  //        document.getElementById("game").innerHTML = html;

    
   
};
