class Card {
    constructor(index, question, answers, answer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = answer;
    }
}

module.exports = Card;