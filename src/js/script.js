console.log("hello!");
// The deck before it’s distributed to the players ( let deck = [])

//function deck() =  {
//take two arrays suits and rank and iterate through the loops to creat a deck
//and put them into "deck"

suit = ["clubs", "diamonds", "spades", "hearts"]
//rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let deck = [];

function startGame() {
    buildDeck();
    shuffle();
    deal();
//while (playerOneDeck.length < deck.length || playerTwoDeck.length < deck.length)
    while (playerOneDeck.length !== 0 && playerTwoDeck.length !== 0) {
    	round()
    }
}

//create the deck
function buildDeck() {
    for (i = 0; i < suit.length; i++) {
        for (j = 0; j < value.length; j++) {
            let card = {
                suit: suit[i],
                value: value[j]
            }
            deck.push(card)
        }
    }
}

//Math.random => to shuffle cards

//Shuffling the deck - (Fisher-Yates Algorithm)

function shuffle() {
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}


//DEALING THE CARDS
// The first player’s cards (let playerOneDeck = [])
let playerOneDeck = []
// The second player’s cards (let playerTwoDeck = [])
let playerTwoDeck = []

// if index of card is even, push to playerTwo array, otherwise, push to playerOne

function deal() {
    for (i = 0; i < deck.length; i++) {
        if (i % 2 === 0) {
            playerTwoDeck.push(deck[i])
        } else {
            playerOneDeck.push(deck[i])
        }
    }
}

//*******doesn't empty the deck array********





// The first player’s card being played for that particular turn (let playerOneCard={})

// The second player’s card being played for that particular turn (let playerTwoCard={})

//each round == object  

//EACH ROUND BEING PLAYED





function cardTurn() {
    //gameBoard.push(playerOneDeck[i], playerTwoDeck[i])
    console.log('Player1 has a ' + playerOneDeck[0].value + ' of ' + playerOneDeck[0].suit)
    console.log('Player2 has a ' + playerTwoDeck[0].value + ' of ' + playerTwoDeck[0].suit)
}



//if (p1 card value > p2 card value)  => push both cards to th end of p1deck array,  else if (p2 card value > p1) =>  push to end of Player 2 deck  else


function round() {
    cardTurn()
    let loosersCard, winnersCard;
    if (playerOneDeck[0].value > playerTwoDeck[0].value) {
        loosersCard = playerTwoDeck.splice(0, 1);
        playerOneDeck.push(loosersCard[0]);
        winnersCard = playerOneDeck.splice(0, 1)
        playerOneDeck.push(winnersCard[0]);
        console.log("Player 1 wins this round! Player 1 has " + playerOneDeck.length + "cards and Player 2 has " + playerTwoDeck.length + " cards.")
    } else if (playerTwoDeck[i] > playerOneDeck[i]) {
        loosersCard = playerOneDeck.splice(0, 1);
        playerTwoDeck.push(loosersCard[0]);
        winnersCard = playerTwoDeck.splice(0, 1)
        playerTwoDeck.push(winnersCard[0]);
        console.log("Player 2 wins this round! Player 1 has " + playerOneDeck.length + "cards and Player 2 has " + playerTwoDeck.length + " cards.")
    } else {
        console.log("It's a tie....War has been declared!!")
        war()
    }
    function war() {
        if (playerOneDeck[3].value > playerTwoDeck[3].value) {
            let warWinnersCards, warLoosersCards
            warLoosersCards = playerTwoDeck.splice(0, 4);
            playerOneDeck.push(...warLoosersCards);
            warWinnersCards = playerOneDeck.splice(0, 4)
            playerOneDeck.push(...warWinnersCards);
            console.log("Player 1 wins this round! Player 1 has " + playerOneDeck.length + "cards and Player 2 has " + playerTwoDeck.length + " cards.")
        } else if (playerTwoDeck[3].value > playerOneDeck[3].value) {
            warLoosersCards = playerOneDeck.splice(0, 4);
            playerTwoDeck.push(warLoosersCards[0]);
            warWinnersCards = playerTwoDeck.splice(0, 4)
            playerTwoDeck.push(warWinnersCards[0]);
            console.log("Player 1 wins this round! Player 1 has " + playerOneDeck.length + "cards and Player 2 has " + playerTwoDeck.length + " cards.")
        } else {
            console.log("It's another tie....War has been declared again!!")
        }

    }





    



// Variables:
//firstPlayerDeck = [];
// secondPlayerDeck = [];
// cardDeck = [];
// spoilsOfWar = [];
// warDeclared = boolean;
// winnerOfRound = null;

// Functions:
// startGame()
// shuffle()
// distributeCards()
// conductTurn()
// addCardsInPlay()
// determineWinner()
// prepareForWar()
// assignWinnerCards()
// receiveSpoilsOfWar()
// finishTurn()
// endGame()



// suit = ["club", "diamond", "spade", "heart"]
// value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]


// for (i = )

