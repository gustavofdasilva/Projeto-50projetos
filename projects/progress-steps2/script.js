let steps = document.getElementsByTagName("h2")
let buttonNext = document.getElementById("next")
let buttonPrev = document.getElementById("prev")
let line = document.getElementById("line")
let counter = 0
let width = -7

changeStep()

function changeStep(id) {
    if(id == "prev") {
        if (!(counter == 1)) {
            counter --
            width -= 7
            line.style.width = width + "%"
        }
        
    } else {
        if (!(counter == steps.length)) {
            counter ++
            width += 7
            line.style.width = width + "%"
        }
    } 

    for(let i = 0 ; i < steps.length; i++) {
        if(steps.item(i).id <= counter) {
            steps.item(i).classList.add("selected")  
        } else {steps.item(i).classList.remove("selected")}
    }

    /*Estilo dos botões*/ 

    if(counter == 1) {
        buttonPrev.classList.add("unsecButton")
        buttonNext.classList.remove("unsecButton")
    } else if (counter == steps.length) {
        buttonNext.classList.add("unsecButton")
        buttonPrev.classList.remove("unsecButton")
    } else {
        buttonNext.classList.remove("unsecButton")
        buttonPrev.classList.remove("unsecButton")
    }

    /*Barra de progresso*/ 
   
}
