let emailWord = document.getElementsByClassName("email")
let passWord = document.getElementsByClassName("pass")

let inputEmail = document.getElementById("email")
    let isEmailFocus = document.activeElement === inputEmail
let inputPass = document.getElementById("password")



inputEmail.addEventListener('focusin',(e) => {
    for(let i = 0 ; i < emailWord.length ; i++) {
        emailWord[i].classList.add("active")
    }
})

inputEmail.addEventListener('focusout',(e) => {
    for(let i = 0 ; i < emailWord.length ; i++) {
        emailWord[i].classList.remove("active")
    }
})

inputPass.addEventListener('focusin',(e) => {
    for(let i = 0 ; i < passWord.length ; i++) {
        passWord[i].classList.add("active")
    }
})

inputPass.addEventListener('focusout',(e) => {
    for(let i = 0 ; i < passWord.length ; i++) {
        passWord[i].classList.remove("active")
    }
})