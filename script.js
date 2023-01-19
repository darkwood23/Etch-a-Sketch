const container = document.querySelector(".all-divs")

for(i = 1; i <= 4; i++) {
    const divAll = document.createElement('div')
    container.appendChild(divAll)
    for(u = 1; u <= 4; u++) {
        const divA = document.createElement("div")
        divAll.appendChild(divA)
    }
}


