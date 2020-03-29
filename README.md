
# Game of War

## Objective

Objective was to create Game of War using JavaScript.   Game should run in the backgound 
and log outcomes to the console.

## Technologies Used

This game was built using Javascript.  Outcome of each round is logged in the console.

## Capabilites


Game initiates as soon as the browser is opened.  Card deck is created, shuffled and 
cards are dealt to the two players.  Each round begins when the players flip over 
their top card. The player with the higher card, wins both cards.  If cards have equal
value, then war is declared and each player must turn over the two more cards.  The
player witht he higher number, wins the cards in plau  The game conintues
until one winner has possession of all the cards.

## Requirements

To play, each player reveals the top card in their stack. The player who played
the card with the higher rank (Aces high) takes both cards and puts them at the
bottom of their stack in an arbitrary order.

If there is a tie, then it's War! In the card game each player adds places the
top three cards of their stack face down, and then each player reveals the top
card again. Whoever wins out of the second reveal takes all of the cards, and if
there is another tie the process repeats until there is a winner.

  
## Limitations 

The scenario where there is a tie and not enough cards to go to war was resulting in an error.
The logic was added to award the cards to the player with more cards and end the game in 
cases where this occurs.

