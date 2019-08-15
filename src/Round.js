const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectAnswers = [];
    this.startTime = new Date();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() ? this.incorrectAnswers.push(this.returnCurrentCard().id) : null;
    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const incorrect = this.incorrectAnswers.length;
    return Math.round(incorrect / this.turns * 100);
  }

  endRound() {
    const endTime = new Date();
    const totalTime = Math.round(endTime - this.startTime) / 1000;
    let totalMinutes;
    if (totalTime < 60) {
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${totalTime} seconds!`;
    } else {
      totalMinutes = Math.round(totalTime / 60);
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${totalMinutes} minutes!`;
    }

  }
}
module.exports = Round;