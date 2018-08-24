//
//Blackjack
//by Dorsa
//


//card variables

let suits = ["Diamond", "Hearts", "Spades", "Clubs"];

let values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "King", "Queen", "Jack"];


//DOM variables

let textArea = document.getElementById('text-area');

let newGameButton = document.getElementById('new-game-button');

let hitButton = document.getElementById('hit-button');

let stayButton = document.getElementById('stay-button');


//Game variables 

let playerScore = 0;
let DealerScore = 0;

let Deck = createDeck();

let gameStarted = false;

let playerCards = [getNextCard(), getNextCard()];

let DealerCards = [getNextCard(), getNextCard()]; //karte object

let gameOver = false;

let DealerWin = false;

let playerCardsString = ''; //ye stringe

let DealerCardsString = '';
 


showStatus();


newGameButton.addEventListener('click', function(){

  gameStarted = true;
  showStatus();

});



hitButton.addEventListener('click',function(){

  playerCards.push(getNextCard());


  showStatus();

});



stayButton.addEventListener('click',function(){

  gameOver = true; 

  showStatus();

  while (DealerScore < playerScore && playerScore <= 21 && DealerScore <= 21){

    

    DealerCards.push(getNextCard());

    
    updateDealerScore();

  }
  textArea.innerText += DealerCardsString;
  showStatus(); 
  
});




function showStatus(){


  if(!gameStarted){
  
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';

  }

  else if (gameStarted){

    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    newGameButton.style.display = 'none';



    playerCardsString ="";

    for (let i = 0; i < playerCards.length; i++){
      
      playerCardsString = playerCardsString + " \n " + getCardString(playerCards[i]); 

    }




    for (let i = 0; i < DealerCards.length; i++){
      
      DealerCardsString = DealerCardsString + " \n " + getCardString(DealerCards[i]);

    }

    //in balayia function nadash avordim too in tabe 





    textArea.innerText = "Dealer Cards : " + "\n" + getCardString(DealerCards[0]) + "\n" + "\n" +
                        "player Cards : " + playerCardsString + "\n" + "player score :" + updatePlayerScore() + "\n";

  
  }


  if(gameOver || playerScore > 21){
    
    hitButton.style.display = "none";
    stayButton.style.display = "none";

    textArea.innerText += "\n second Dealer card : \n ";
    textArea.innerText += getCardString(DealerCards[1]);                       
    textArea.innerText += "\n Dealer score :";
    textArea.innerText += updateDealerScore();
    textArea.innerText += "\n \n";

    winner();

    if (DealerWin){
      textArea.innerText += 'DEALER WINS !';
    }

    else {
      textArea.innerText += 'YOU WIN';
    }
                      


  }

}




function createDeck(){

  let Deck = [];

  for (let suitIDX = 0; suitIDX < suits.length; suitIDX++){

    for (let valueIDX = 0; valueIDX < values.length; valueIDX++){
          
      let card = {

        suit:suits[suitIDX],

        value:values[valueIDX]

      };

      Deck.push(card);

    }
  } 

  return Deck;

}




function getCardString(card){

  return card.value + " of " + card.suit;

}



function shuffleDeck(Deck){

  for(let i = 0; i < Deck.length; i++){

    let swapIDX = Math.trunc(Math.random()*Deck.length);

    //swap
    let tmp = Deck[swapIDX];
    Deck[swapIDX] = Deck[i];
    Deck[i] = tmp; 
   
    }
}



function getNextCard(){

  shuffleDeck(Deck);

  return Deck.shift();

}



function getCardNumericValue(card){

  switch(card.value){

    case 'Ace':
      return 1;

    case 'Two':
      return 2;

    case 'Three':
      return 3;

    case 'Four':
      return 4;

    case 'Five':
      return 5;

    case 'Six':
      return 6;

    case 'Seven':
      return 7

    case 'Eight':
      return 8;

    case 'Nine':
      return 9;

    default:
      return 10;

  }

}




function updateDealerScore(){

  DealerScore = 0;

  for (let i = 0; i < DealerCards.length; i++ ){

    DealerScore = DealerScore + getCardNumericValue(DealerCards[i]);


  }
  return DealerScore;  
}



function updatePlayerScore(){


  playerScore = 0;

  for (let i = 0; i < playerCards.length; i++ ){

  

    playerScore = playerScore + getCardNumericValue(playerCards[i]);
  }
  //console.log(playerScore);
  return playerScore;
}





function winner(){


  if (DealerScore > 21){
   
 
    DealerWin = false;
    
  }

  else if (DealerScore >= playerScore || playerScore > 21){

    DealerWin = true;


  }

  return DealerWin;

}



