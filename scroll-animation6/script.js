const divs = document.getElementsByClassName("div")
let elementHeight = 260

window.addEventListener('scroll',(e) => {
    for (let i = 0; i < divs.length ; i++) {
        let elementTop = divs[i].getBoundingClientRect().top
        let windowTop = window.innerHeight
        if(elementTop < windowTop - elementHeight) {
            divs[i].classList.add("visible")
        } else {divs[i].classList.remove("visible")}
    }

})
