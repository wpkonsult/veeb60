let matkaAndmed = {
    nimi: "Rabamatk",
    kirjeldus: "Dlasdfld asdlfasdl falsdkfj aldkjfadfasdfjadlfkasdlf",
    pilt: "./matkaja.png"
}

function matkaVaade(matkObj) {
    let matk = "<div>"
        matk += `<img src="${matkObj.pilt}">`
    matk += "</div>"
    matk += "<div>"
        matk += "Nimetus:" + matkObj.nimi
    matk += "</div>"
    matk += "<div>"
        matk += "Kirjeldus:" + matkObj.kirjeldus
    matk += "</div>"
    
    return matk;
}

document.querySelector("#matkainfo").innerHTML = matkaVaade(matkaAndmed)