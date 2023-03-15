let steps = document.getElementsByTagName("h2")
let buttonNext = document.getElementById("next")
let buttonPrev = document.getElementById("prev")
let line = document.getElementById("line")
let counter = 0

changeStep()

function changeStep(id) {
    if(id == "prev") {
        if (!(counter == 1)) {
            counter --
        }
        
    } else {
        if (!(counter == 4)) {
            counter ++
        }
    } 

    for(let i = 0 ; i < steps.length; i++) {
        if(steps.item(i).id == counter) {
            steps.item(i).classList.add("selected")  
        } else {steps.item(i).classList.remove("selected")}
    }

    /*Estilo dos botões*/ 

    if(counter == 1) {
        buttonPrev.classList.add("unsecButton")
        buttonNext.classList.remove("unsecButton")
    } else if (counter == 4) {
        buttonNext.classList.add("unsecButton")
        buttonPrev.classList.remove("unsecButton")
    } else {
        buttonNext.classList.remove("unsecButton")
        buttonPrev.classList.remove("unsecButton")
    }

    /*Barra de progresso*/ 
    switch (counter) {
        case 1:
            line.style.width = "0%"
            break;
            
        case 2:
            line.style.width = "7%"
            break;

        case 3:
            line.style.width = "15%"
            break;

        case 4:
            line.style.width = "22%"
            break;
    
        default:
            break;
    }
}
