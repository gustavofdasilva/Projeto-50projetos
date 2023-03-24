let emailWord = document.getElementsByClassName("email")
let passWord = document.getElementsByClassName("pass")

let inputEmail = document.getElementById("email")
let inputPass = document.getElementById("password")



inputEmail.addEventListener('focus',(e) => {
    for(let i = 0 ; i < emailWord.length ; i++) {
            console.log(emailWord[i])
            emailWord[i].classList.add("active")
    }
})