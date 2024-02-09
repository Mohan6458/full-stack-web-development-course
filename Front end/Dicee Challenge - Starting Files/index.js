var randomnumber1 = Math.floor(Math.random()*6)+1;

var diceimage = "dice" + randomnumber1 + ".png";

var imagesoure = "images/" + diceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imagesoure);


var randomnumber2 = Math.floor(Math.random()*6)+1;

var diceimagesource = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",diceimagesource);


if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 win";
}else if (randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 win";
}else{
    document.querySelector("h1").innerHTML="Draw";
}






