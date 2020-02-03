
"use strict";
console.log("hello!");

const suit = ["clubs", "diamonds", "spades", "hearts"]
//rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let deck = [];
//DEALING THE CARDS
// The first player’s cards (let playerOneDeck = [])
let playerOneDeck = []
// The second player’s cards (let playerTwoDeck = [])
let playerTwoDeck = []

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
            }
            deck.push(card)
        }
    }
}

//Shuffling the deck - (Fisher-Yates Algorithm)
function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}


// if index of card is even, push to playerTwo array, otherwise, push to playerOne
function deal() {
    for (let i = 0; i < deck.length; i++) {
        if (i % 2 === 0) {
            playerTwoDeck.push(deck[i])
        } else {
            playerOneDeck.push(deck[i])
        }
    }
}

function cardTurn() {
    //gameBoard.push(playerOneDeck[i], playerTwoDeck[i])
    console.log('Player1 has a ' + playerOneDeck[0].value + ' of ' + playerOneDeck[0].suit)
    console.log('Player2 has a ' + playerTwoDeck[0].value + ' of ' + playerTwoDeck[0].suit)
}

/* 
	if (p1 card value > p2 card value)  => push both cards to th end of p1deck array,  
	else if (p2 card value > p1) =>  push to end of Player 2 deck  else 
*/
function round() {
    cardTurn();
    let loosersCard, winnersCard;
    if (playerOneDeck[0].value > playerTwoDeck[0].value) {
        loosersCard = playerTwoDeck.splice(0, 1);
        playerOneDeck.push(loosersCard[0]);
        winnersCard = playerOneDeck.splice(0, 1);
        playerOneDeck.push(winnersCard[0]);
        console.log(`Player 1 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`);
    } else if (playerTwoDeck[0].value > playerOneDeck[0].value) {
        loosersCard = playerOneDeck.splice(0, 1);
        playerTwoDeck.push(loosersCard[0]);
        winnersCard = playerTwoDeck.splice(0, 1);
        playerTwoDeck.push(winnersCard[0]);
        console.log(`Player 2 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`);
    } else {
        console.log("It's a tie....War has been declared!!");
        war();
    }
}

/*
	Should compare the fourth card in the array and if tie every fourth card after that until on  player take all the cards.
*/

function war() {
    let warCardLength = 2;
    let playerOneCard = playerOneDeck.splice(0, 1), playerTwoCard = playerTwoDeck.splice(0, 1);
    if (playerTwoDeck.length >= 2 && playerOneDeck.length >= 2) {
        let warWinnersCards, warLoosersCards;
        do {
            if (playerOneDeck[0].value > playerTwoDeck[0].value) {
                warLoosersCards = playerTwoDeck.splice(0, warCardLength);
                warWinnersCards = playerOneDeck.splice(0, warCardLength);
                playerOneDeck.push(...playerOneCard);
                playerOneDeck.push(...playerTwoCard);
                playerOneDeck.push(...warLoosersCards);
                playerOneDeck.push(...warWinnersCards);
                console.log(`Player 1 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`);
            } else if (playerTwoDeck[0].value > playerOneDeck[0].value) {
                playerTwoDeck.push(...playerOneCard);
                playerTwoDeck.push(...playerTwoCard);
                warLoosersCards = playerOneDeck.splice(0, warCardLength);
                warWinnersCards = playerTwoDeck.splice(0, warCardLength);
                playerTwoDeck.push(...warWinnersCards);
                playerTwoDeck.push(...warLoosersCards);
                console.log(`Player 2 wins this round! Player 1 has ${playerOneDeck.length} cards and Player 2 has ${playerTwoDeck.length} cards.`);
            } else {
                console.log("It's another tie....War has been declared again!!");
                warCardLength = warCardLength + 2;
            }
        } while (warCardLength < playerOneDeck.length && warCardLength < playerTwoDeck.length && playerOneDeck[warCardLength - 1].value === playerTwoDeck[warCardLength - 1].value);
    } else {
        console.log("Not enough card to go to war.")
        if (playerOneDeck.length > playerTwoDeck.length) {
            console.log("Player1 takes all.")
            playerOneCard.push(...playerTwoDeck);
        } else {
            console.log("Player2 takes all.")
            playerTwoDeck.push(...playerOneDeck);
        }
    }

}

function declareWinner() {
    if (playerOneDeck.length > playerTwoDeck.length) {
        console.log("Player 1 won.")
    } else {
        console.log("Player 2 won.")
    }
}

startGame();
declareWinner(); 
