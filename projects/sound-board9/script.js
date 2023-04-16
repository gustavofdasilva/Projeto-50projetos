let buttons = document.getElementsByTagName("button")

    let audios = {
        applause: new Audio('audio/aplausos.mp3'),
        boo: new Audio('audio/susto.mp3'),
        gasp: new Audio('audio/surpresa.mp3'),
        tada: new Audio('audio/tada.mp3'),
        victory: new Audio('audio/sucesso.mp3'),
        wrong: new Audio('audio/errado.mp3'),
    }

    let arrAudios = [audios.applause,audios.boo,audios.gasp,audios.tada,audios.victory,audios.wrong]
    let size = Object.keys(audios).length
    

function playAudio(id) {
    for (let i = 0; i < size; i++) {
        let index = Object.keys(audios)[i]
        if(id == index) {
            arrAudios[i].play()
        } else {}
    }
}