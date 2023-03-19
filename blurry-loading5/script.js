let cont = true
const bgImage = document.querySelector(".bgImage")
const title = document.querySelector("h1")
let count = [100,0]


window.onload = setInterval(() => {
    if(count[1] < 100) {
        console.log(bgImage)
            count[0] --
            count[1] ++
            console.log(count[0]+","+count[1])
            title.innerText = `${count[1]}%`
            title.style.color = `rgba(255, 255, 255, ${(count[0]/80)})`
            bgImage.style.filter = `blur(${count[0]/5}px)`
    }
},25)

