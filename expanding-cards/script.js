let cards = document.getElementsByClassName("card")

function expand(id) {
    for(let i = 0; i < cards.length ; i++) {
        if(cards.item(i).id == id) {
            cards.item(i).style.width = "60%"
            cards.item(i).children[0].style.opacity = "1"
        } else {
            cards.item(i).style.width = "5%"
            cards.item(i).children[0].style.opacity = "0"
        }
    }
}

