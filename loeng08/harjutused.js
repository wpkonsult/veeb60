function nimeAnalyys(nimi) {
    let vastus = "<div class='vastus'>"
    vastus = vastus + "<div>"
    vastus = vastus + "Nimes on " + nimi.length + " tähte" 
    vastus = vastus + "</div>"
    vastus = vastus + "<div>"
    vastus = vastus + "nime esitäht on " + nimi[0]
    vastus = vastus + "</div>"
    vastus = vastus + "</div>"
    return vastus
}

function analyysi() {
    console.log("Kasutaja vajutas nupule")
    let sisestatudNimi = document.querySelector("#nimi").value
    console.log("Sisestatud nimi:" + sisestatudNimi)
    let tulemus = nimeAnalyys(sisestatudNimi)
    console.log(tulemus)
    document.querySelector("#tulemused").innerHTML = tulemus
}

//let nimi = prompt("Sisesta nimi")
//let tulemus = nimeAnalyys(nimi)
//console.log(tulemus)
