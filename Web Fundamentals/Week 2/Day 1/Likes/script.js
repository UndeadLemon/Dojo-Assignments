

function likePlus(element){
    num = Number(element.parentElement.querySelector("span").innerText);
    element.parentElement.querySelector("span").innerText = num + 1;
}