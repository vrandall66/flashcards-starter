const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function () {

  it('should be a function', function () {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store an instance of deck', function () {
    const card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
    const card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
    const card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap' })
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck);
  });

  it('should return the current card being played', function () {
    const card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
    const card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
    const card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap' })
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should take a turn', function () {
    const card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
    const card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
    const card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap' })
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('pug')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
    expect(round.takeTurn('Lex')).to.equal('incorrect!');
  });

  it('should calculate percentage of correct answers', function () {
    const card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
    const card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
    const card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap' })
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.incorrectAnswers.length).to.equal(2);
    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it.only('should output the percentage of correct answers at the end of the round', function () {
    const card1 = new Card({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter' });
    const card2 = new Card({ id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder' });
    const card3 = new Card({ id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap' })
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly in 0 seconds!');
  });

});