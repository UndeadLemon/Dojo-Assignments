var imgArray = ["./images/one.png", "./images/two.png","./images/three.png","./images/four.png","./images/five.png","./images/six.png"]
let diceImg = document.querySelector("img");

function roll(){
    let diceImg = document.querySelector("img");
    var roll = Math.floor(Math.random() * 6);
    console.log(roll);
    console.log(imgArray[1]);
    var diceImages = imgArray[roll];
    diceImg.src = diceImages;
}