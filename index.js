var p1 = Math.round((Math.random()*5))+1;
var p2 = Math.round((Math.random()*5))+1;

var i1 = "images/dice"+p1+".png";
var i2 = "images/dice"+p2+".png";

document.querySelectorAll("img")[0].setAttribute("src", i1);
document.querySelectorAll("img")[1].setAttribute("src", i2);

if (p1 > p2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} else if (p1 < p2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
} else {
    document.querySelector("h1").textContent = "Draw!"; 
}