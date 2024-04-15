const allowedChars = "0123456789abcdef";
let color ="#";
const btn = document.querySelector("button");

btn.addEventListener("click", generateRandomColor);

function generateRandomColor(){
    color = "#";
    for(let i =0; i< 6 ; i++){
        color += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }
    document.querySelector("input").value= color;
    document.body.style.backgroundColor = color;
}