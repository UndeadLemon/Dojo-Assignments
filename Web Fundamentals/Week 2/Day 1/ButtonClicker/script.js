var ninjaOneLikes = 13
var ninjaTwoLikes = 37

function onLikeOne(element){
    
    ninjaOneLikes++;
    element.innerText = ninjaOneLikes + " likes";
    alert("Ninja was liked!");
}
function onLikeTwo(element){
    
    ninjaTwoLikes++;
    element.innerText = ninjaTwoLikes + " likes";
    alert("Ninja was Liked!");

}
function logChange(element){
    console.log("test")
    if(element.textContent === "Login"){
        element.textContent = "Logout";
    }
    else{
        element.textContent = "Login";
    };
};
function buttonGone(element){
    element.remove(element)
}