"use strict";
console.log("hello!");

const suit = ["clubs", "diamonds", "spades", "hearts"];
//rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let deck = [];
let shuffledDeck = [];
//DEALING THE CARDS
// The first player’s cards (let playerOneDeck = [])
let playerOneDeck = [];
// The second player’s cards (let playerTwoDeck = [])
let playerTwoDeck = [];
let loosersCard, winnersCard;
let warCards = [];
let playerOneCard;
let playerTwoCard;

function startGame() {
  buildDeck();
  shuffle();
  deal();
  //while (playerOneDeck.length < deck.length || playerTwoDeck.length < deck.length){
  while (playerOneDeck.length !== 0 && playerTwoDeck.length !== 0) {
    round();
  }
}

//create the deck
function buildDeck() {
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < value.length; j++) {
      let card = {
        suit: suit[i],
        value: value[j]
      };
      deck.push(card);
    }
  }
}

// Shuffling the deck - (Fisher-Yates Algorithm)

function shuffle() {
  while (deck.length) {
    let index = Math.floor(Math.random() * deck.length);
    shuffledDeck.push(deck.splice(index, 1)[0]);
  }
}

// if index of card is even, push to playerTwo array, otherwise, push to playerOne
function deal() {
  for (let i = 0; i < shuffledDeck.length; i++) {
    if (i % 2 === 0) {
      playerTwoDeck.push(shuffledDeck[i]);
    } else {
      playerOneDeck.push(shuffledDeck[i]);
    }
  }
}

function cardTurn() {
  //gameBoard.push(playerOneDeck[i], playerTwoDeck[i])
  console.log(
    "Player 1 has a " + playerOneDeck[0].value + " of " + playerOneDeck[0].suit
  );
  console.log(
    "Player 2 has a " + playerTwoDeck[0].value + " of " + playerTwoDeck[0].suit
  );
}

/* 
	if (p1 card value > p2 card value)  => push both cards to th end of p1deck array,  
	else if (p2 card value > p1) =>  push to end of Player 2 deck  else 
*/
function round() {
  cardTurn();
  //let loosersCard, winnersCard;
  //compare top card on each players deck, if player 1's card is greater push both cards to end of player one deck
  if (playerOneDeck[0].value > playerTwoDeck[0].value) {
    loosersCard = playerTwoDeck.splice(0, 1);
    playerOneDeck.push(loosersCard[0]);
    winnersCard = playerOneDeck.splice(0, 1);
    playerOneDeck.push(winnersCard[0]);
    console.log(
      `Player 1 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`
    );
    //if player 2's card is greater, push both cards to player 2's deck
  } else if (playerTwoDeck[0].value > playerOneDeck[0].value) {
    loosersCard = playerOneDeck.splice(0, 1);
    playerTwoDeck.push(...loosersCard);
    winnersCard = playerTwoDeck.splice(0, 1);
    playerTwoDeck.push(...winnersCard);
    console.log(
      `Player 2 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`
    );
    //else go to war.  push both cards to warCards array go to war.
  } else {
    console.log("It's a tie....War has been declared!!");
    warCards.push(...playerOneDeck.splice(0, 1));
    warCards.push(...playerTwoDeck.splice(0, 1));
    war();
  }
}

/*
	Should compare the second card in the array and if tie every fourth card after that until on  player take all the cards.
*/

function war() {
  let warWinnerCards;
  let warLoserCards;
  let playerOneWarCards;
  let playerTwoWarCards;
  if (playerTwoDeck.length >= 4 && playerOneDeck.length >= 4) {
    if (playerOneDeck[1].value > playerTwoDeck[1].value) {
      warWinnerCards = playerOneDeck.splice(0, 2);
      warCards.push(...warWinnerCards);
      warLoserCards = playerTwoDeck.splice(0, 2);
      warCards.push(...warLoserCards);
      playerOneDeck.push(...warCards);
      warCards = [];
      console.log(
        `Player 1 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`
      );
    } else if (playerTwoDeck[1].value > playerOneDeck[1].value) {
      warLoserCards = playerOneDeck.splice(0, 2);
      warCards.push(...warLoserCards);
      warWinnerCards = playerTwoDeck.splice(0, 2);
      warCards.push(...warWinnerCards);
      playerTwoDeck.push(...warCards);
      console.log(
        `Player 2 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`
      );
      warCards = [];
    } else {
      console.log("It's another tie....War has been declared again!!");
      playerOneWarCards = playerOneDeck.splice(0, 2);
      warCards.push(...playerOneWarCards);
      playerTwoWarCards = playerTwoDeck.splice(0, 2);
      warCards.push(...playerTwoWarCards);
      console.log(warCards);
      war();
    }
  } else {
    console.log("Not enough card to go to war.");
    if (playerOneDeck.length > playerTwoDeck.length) {
      console.log("Player1 takes all.");
      playerOneDeck.push(...playerTwoDeck);
      playerTwoDeck = [];
    } else {
      console.log("Player 2 takes all.");
      playerTwoDeck.push(...playerOneDeck);
      playerOneDeck = [];
    }
  }
}

function declareWinner() {
  if (playerOneDeck.length > playerTwoDeck.length) {
    console.log("PLAYER 1 WON THE GAME!!");
  } else {
    console.log("PLAYER 2 WON THE GAME!!");
  }
}

startGame();
declareWinner();
