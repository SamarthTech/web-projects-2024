class WordScrambleGame {
  constructor() {
      this.words = ['javascript', 'html', 'css', 'python', 'java', 'ruby', 'php', 'swift'];
      this.currentWord = '';
      this.scrambledWord = '';
      
      // DOM elements
      this.wordElement = document.getElementById('word');
      this.guessInput = document.getElementById('guess');
      this.messageElement = document.getElementById('message');
      
      // Initialize event listeners
      this.initializeEventListeners();
      
      // Check for saved dark mode preference
      this.initializeDarkMode();
      
      // Start game
      this.displayScrambledWord();
  }
  
  initializeEventListeners() {
      document.getElementById('submit').addEventListener('click', () => this.checkGuess());
      document.getElementById('new-word').addEventListener('click', () => this.newWord());
      document.getElementById('toggle-dark-mode').addEventListener('click', () => this.toggleDarkMode());
      
      // Add keyboard support
      this.guessInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              this.checkGuess();
          }
      });
  }
  
  initializeDarkMode() {
      const darkMode = localStorage.getItem('darkMode') === 'true';
      if (darkMode) {
          document.body.classList.add('dark-mode');
      }
  }
  
  selectRandomWord() {
      const index = Math.floor(Math.random() * this.words.length);
      return this.words[index];
  }
  
  scrambleWord(word) {
      let scrambled = word;
      // Ensure the scrambled word is different from the original
      while (scrambled === word) {
          scrambled = word
              .split('')
              .sort(() => Math.random() - 0.5)
              .join('');
      }
      return scrambled;
  }
  
  displayScrambledWord() {
      this.currentWord = this.selectRandomWord();
      this.scrambledWord = this.scrambleWord(this.currentWord);
      this.wordElement.textContent = this.scrambledWord;
  }
  
  checkGuess() {
      const guess = this.guessInput.value.trim().toLowerCase();
      
      if (!guess) {
          this.showMessage('Please enter a guess!', 'error');
          return;
      }
      
      if (guess === this.currentWord) {
          this.showMessage('Correct! Well done!', 'success');
          this.guessInput.disabled = true;
          setTimeout(() => this.newWord(), 1500);
      } else {
          this.showMessage('Incorrect. Try again!', 'error');
          this.guessInput.select();
      }
  }
  
  showMessage(text, type) {
      this.messageElement.textContent = text;
      this.messageElement.className = type;
  }
  
  newWord() {
      this.displayScrambledWord();
      this.guessInput.value = '';
      this.guessInput.disabled = false;
      this.messageElement.textContent = '';
      this.guessInput.focus();
  }
  
  toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WordScrambleGame();
});