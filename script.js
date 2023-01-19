const container = document.querySelector(".all-divs")

let promptUser = prompt("Enter a number: ")

promptUser = Number(promptUser)

function getRoot(user) {
    for(i = 1; i <= user; i++) {
        if(i * i === user) {
            return i
        }
    }
}

let newI = getRoot(promptUser)

for(i = 1; i <= newI; i++) {
    const divAll = document.createElement('div')
    container.appendChild(divAll)
    for(u = 1; u <= newI; u++) {
        const divA = document.createElement("div")
        divAll.appendChild(divA)
    }
}


