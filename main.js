function startGame()
{

for(var i = 1; i<=9; i++)
{
  clearBox(i);
}

  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " gets to play first");
}

function setMessage(msg)
{
  document.getElementById("message").innerText=msg;
}

function nextMove(square)
{
  if(document.winner != null)
  {
    setMessage(document.turn + " has already won the game :) ");
  }
  else if(square.innerText == '')
  {
    square.innerText= document.turn;
    switchTurn();
  }
  else
  {
    setMessage("Draw"); 
  }
  
}

function switchTurn()
{
  if(checkForWinner(document.turn))
  {
    setMessage("Congrats "+ document.turn + " you won !");
    document.winner=document.turn;
  }
  else if(document.turn=="X")
  
  {
    document.turn="O";
    setMessage("It's "+document.turn+"'s turn");
  }
  else
  {
    document.turn="X";
    setMessage("It's "+document.turn+"'s turn");
  }
  
  
}
/*
function checkForWinner(move)
{
  var result=false;
  if(checkrow(1,2,3,move)||
     checkrow(4,5,6,move)||
     checkrow(7,8,9,move)||
     checkrow(1,4,7,move)||
     checkrow(2,5,8,move)||
     checkrow(3,6,9,move)||
     checkrow(1,5,9,move)||
     checkrow(3,5,7,move))
  {
    result=true;
  }
  return result;
}*/

function checkForWinner(move)
{
  var result =false;
  if(checkRow(1, 2, 3, move) ||
     checkRow(4, 5, 6, move) ||
     checkRow(7, 8, 9, move) ||
     checkRow(1, 4, 7, move) ||
     checkRow(2, 5, 8, move) ||
     checkRow(3, 6, 9, move) ||
     checkRow(1, 5, 9, move) ||
     checkRow(3, 5, 7, move)){
    result = true;
  }
  return result;
     
}

function checkRow(a,b,c,move)
{
  var result=false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move)
  {
    result =true;
  }
  return result;
}

function getBox(number)
{
  return document.getElementById("s" +number).innerText;
}

function clearBox(number)
{
  document.getElementById("s" +number).innerText = "";
}
