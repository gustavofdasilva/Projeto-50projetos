let mainElement = document.getElementById("main")

function rotate(dir) {
    console.log("clique")
    if(dir == "ccw") {
        console.log("para a direita")
        mainElement.classList.add("ccw")
    } else {
        mainElement.classList.remove("ccw")
    }
}