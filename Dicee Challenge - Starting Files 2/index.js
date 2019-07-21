
var arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

  var randomNum = Math.floor((Math.random() * 6));
  var randomNum1 = Math.floor((Math.random() * 6));





document.querySelector(".img1").setAttribute("src",arr[randomNum]);
document.querySelector(".img2").setAttribute("src",arr[randomNum1]);

if(randomNum>randomNum1){
  document.querySelector("h1").innerHTML = "Player one Wins ☄️";}
  else if(randomNum1>randomNum){
    document.querySelector("h1").innerHTML = " Player two Wins☄️";

} else{
  document.querySelector("h1").innerHTML = "There was a draw ☄️☄️";
}
