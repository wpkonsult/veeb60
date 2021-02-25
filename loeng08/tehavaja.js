let ylesanded = []

function naitaToDo() {
    let tulemus = ""
    for (let index = 0; index < ylesanded.length; index++) {
        const element = ylesanded[index];
        tulemus = tulemus + "<div>" + element + '</div>'
    }
    document.querySelector("#ylesanded").innerHTML = tulemus
}

function lisaYlesanne() {
    let uusYlesanne = document.querySelector("#uus_ylesanne").value
    uusYlesanne = uusYlesanne.toLowerCase()
    console.log("Sisestati uus ülesanne: " + uusYlesanne)
    if (!ylesanded.includes(uusYlesanne)) {
        ylesanded.push(uusYlesanne)
    }
    naitaToDo()
}

naitaToDo()