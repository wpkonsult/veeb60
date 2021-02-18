let matkaAndmed1 = {
    nimi: "Rabamatk",
    kirjeldus: "Dlasdfld asdlfasdl falsdkfj aldkjfadfasdfjadlfkasdlf",
    pilt: "./pildid/matkaja.png"
}

let matkaAndmed2 = {
    nimi: "Rattamatk",
    kirjeldus: "Väntame iga päev vähemalt 40 kilomeetrit. Ja nii nädal otsa",
    pilt: "./pildid/rattamatk.jpg"
}

let matkaAndmed3 = {
    nimi: "Süstamakt",
    kirjeldus: "Sõidame iga päev vähemalt 10 kilomeetrit. Ja nii nädal otsa",
}

let koikMatkad = [
    matkaAndmed1, 
    matkaAndmed2, 
    matkaAndmed3,
    {
        nimi: "Jalgsimatk",
        kirjeldus: "Kõnnime iga päev vähemalt 10 kilomeetrit. Ja nii nädal otsa",
        pilt: "./pildid/matk_tartus1.jpg"
    }
]

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

function matkaKaart(matkObj) {
    let pildiElement = ''
    if (matkObj.pilt) {
        pildiElement = `
        <img class="card-img-top" src="${matkObj.pilt}" alt="Card image">
        `;
    }

    let loodudHtml = `
    <div class="card col-6 col-md-4 col-lg-3">
        ${pildiElement}
        <div class="card-body">
        <h4 class="card-title">${matkObj.nimi}</h4>
        <p class="card-text">${matkObj.kirjeldus}</p>
        <a href="#" class="btn btn-primary">See Profile</a>
        </div>
    </div>    
    `

    return loodudHtml;
}

let matkaRidaElement = '<div class="row">'

for (let index = 0; index < koikMatkad.length; index++) {
    let matkaAndmed = koikMatkad[index]
    matkaRidaElement += matkaKaart(matkaAndmed)  
}
matkaRidaElement += '</div'

document.querySelector("#matkainfo").innerHTML = matkaRidaElement
