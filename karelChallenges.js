// Challenge 1: Move Karel to Top Right Spot in 5X5 world

function main(){
   //your code here
   goToTopRight();
}

function goToTopRight(){
   while (frontIsClear()){
      move();
   }
   turnLeft();
   while (frontIsClear()){
      move();
   }
}

// Challenge 2: Move Karel to Top Right Spot in 5X5 world and put Beepers on diagonal
function main(){
   //your code here
   
   while(frontIsClear()){
      legitMove();
      turnToNormal();   
   }
   putBeeper();
}

function legitMove(){
   putBeeper();
   move();
   turnLeft();
   move();
}

function turnToNormal(){
   turnLeft();
   turnLeft();
   turnLeft();
}

// Challenge 3: Move Karel To Create Chessboard Pattern
function main(){
   //your code here
   
   //Bottom Row
   bottomRow();
   
   //Right Row
   turnLeft();
   legitMove();
   legitMove();
   
   //Top Row
   turnLeft();
   legitMove();
   legitMove();
   
   //Left Row
   turnLeft();
   
   legitMove();
   move();
   // Middle Elements
   turnLeft();
   move();
   putBeeper();
   
   legitMove();
   turnLeft();
   legitMove();
   turnLeft();
   legitMove();
   turnLeft();
   
   move();
   turnLeft();
   move();
   putBeeper();
}

function bottomRow(){
   putBeeper();
   legitMove();
   legitMove();
}

function legitMove(){
   move();
   move();
   putBeeper();
}