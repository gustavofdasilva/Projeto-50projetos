let button = document.querySelector("button")
let text = document.querySelector("p")

function getJoke() {
    return fetch("https://icanhazdadjoke.com/slack")
        .then(data => data.json())
        .catch(err=> console.log(err))
}

async function getNewJoke() {
    let joke = await getJoke()
    //joke.attachments[0].text
    text.innerText = joke.attachments[0].text
}

getNewJoke()