let textArea = document.getElementById("text")
let text



textArea.addEventListener("keyup",(key)=>{
    text = textArea.value
    let lastValue = text.substring(text.length-1,text.length)
    if(lastValue == ",") {
        console.log("NOVA ESCOLHA")
    }
})