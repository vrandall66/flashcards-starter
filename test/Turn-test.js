const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {
  it('should be a function', function () {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should have a method to return the card', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should have a method that returns true or false for the guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(false);
    const turn2 = new Turn('object', card);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should have a method that returns "incorrect" or "correct" on true or false', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.giveFeedback()).to.equal('incorrect!')
    const turn2 = new Turn('object', card);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});