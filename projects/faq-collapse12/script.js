let sections = document.getElementsByTagName("section")

function toggleInfo(id) {

    for(let i = 0; i < sections.length ; i++) {
        let section = sections[i]
        if(section.classList.contains(`s${id.toString()}`)) {
            let button = section.children[0].children[0].children[1]
            let span = section.children[0]

            span.children[1].classList.toggle("nonvisible")
            section.classList.toggle("sec-visible")
            section.children[0].classList.toggle("sec-visible")
            button.classList.toggle("sec-visible")
        } 
    }
}


