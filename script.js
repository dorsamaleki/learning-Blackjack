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

let Deck = createDeck();

let gameStarted = false;

let playerCards = [getNextCard(), getNextCard()];

let DealerCards = [getNextCard(), getNextCard()]; //karte object

let gameOver = false;

 


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



    let playerCardsString = ''; //ye stringe

    for (let i = 0; i < playerCards.length; i++){
      
      playerCardsString = playerCardsString + " \n " + getCardString(playerCards[i]); 

    }


    let DealerCardsString = '';

    for (let i = 0; i < DealerCards.length; i++){
      
      DealerCardsString = DealerCardsString + " \n " + getCardString(DealerCards[i]);

    }

    //in balayia function nadash avordim too in tabe 





    textArea.innerText = "Dealer Cards : " + "\n" + getCardString(DealerCards[1]) + "\n" + "\n" +
                        "player Cards : " + playerCardsString + "\n" + "player score :" + updatePlayerScore();

  
  }


  if(gameOver || playerScore > 21){
    
    hitButton.style.display = "none";
    stayButton.style.display = "none";




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



function getDealerScore(){

  let DealerScore = getCardNumericValue(DealerCards[0]) + getCardNumericValue(DealerCards[1]) ;
 
  return DealerScore;
}




  
function updatePlayerScore(){


  playerScore = 0;

  for (let i = 0; i < playerCards.length;i++ ){

  

    playerScore = playerScore + getCardNumericValue(playerCards[i]);
  }
  //console.log(playerScore);
  return playerScore;
}





