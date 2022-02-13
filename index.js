var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomDiceImageSource1="images/"+randomDiceImage1;
document.querySelector(".img1").setAttribute("src",randomDiceImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomDiceImageSource2="images/"+randomDiceImage2;
document.querySelector(".img2").setAttribute("src",randomDiceImageSource2);

var resultToBeDeclared;
if(randomNumber1>randomNumber2)
resultToBeDeclared="Player 1 Wins";
if(randomNumber1<randomNumber2)
resultToBeDeclared="Player 2 Wins";
if(randomNumber1===randomNumber2)
resultToBeDeclared="Draw";

document.querySelector(".container h1").innerHTML=resultToBeDeclared;


