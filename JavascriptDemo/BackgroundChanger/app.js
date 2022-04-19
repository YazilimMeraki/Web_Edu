const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","yellow","green","red","blue"]

button.addEventListener("click",changeBackground);

function changeBackground(){
    const randomnumb = Math.floor(Math.random() * colors.length);

    const color = colors[randomnumb];

    body.style.backgroundColor =color;
    
}