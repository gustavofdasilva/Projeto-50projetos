let mainElement = document.getElementById("main")
let buttonMenu = document.getElementById("menu")
let closeMenu = document.getElementById("close")
let infoMenu = document.getElementById("info")

let deg = 0

closeMenu.style.transform = `rotate${deg+25}deg`

function rotate(dir) {
    console.log("clique")
    if(dir == "ccw") {
        console.log("para a direita")
        deg = -25
        mainElement.style.transform = `rotate(${deg}deg)`
        buttonMenu.style.transform = `rotate(${deg-25}deg)`
        closeMenu.style.transform = `rotate(${26+deg}deg)`
        infoMenu.style.visibility = "visible"
    } else {
        deg = 0
        buttonMenu.style.transform = `rotate(${deg}deg)`
        mainElement.style.transform = `rotate(${deg}deg)`
        closeMenu.style.transform = `rotate(${35+deg}deg)`
        infoMenu.style.visibility = "hidden"
    }
    console.log(deg)
}