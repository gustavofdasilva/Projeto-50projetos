let sections = document.getElementsByTagName("section")

function toggleInfo(id) {

    for(let i = 0; i < sections.length ; i++) {
        let section = sections[i]
        if(section.classList.contains(`s${id.toString()}`)) {
            section.children[1].classList.toggle("nonvisible")
            section.classList.toggle("sec-visible")
        }
    }
}


