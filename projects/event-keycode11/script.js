let placeHolder = document.getElementById("none")
let keyboard = document.querySelector("body")
let eKey = document.getElementById("eKey")
let eKeyCode = document.getElementById("eKeyCode")
let eCode = document.getElementById("eCode")

placeHolder.style.display = "none"

keyboard.addEventListener("keypress",(e)=> {
    eKey.innerText = e.key
    eKeyCode.innerText = e.keyCode
    eCode.innerText = e.code
})

