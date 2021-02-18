let matkad = ['jalgsimatk', 'rattamatk', 'süstamatk', 'mägimatk']

function naitaMatkasid() {
    let tulemus = ""
    for (let index = 0; index < matkad.length; index++) {
        const element = matkad[index];
        tulemus = tulemus + "<div>" + element + '</div>'
    }
    document.querySelector("#matkad").innerHTML = tulemus
}

function lisaMatk() {
    let uusMatk = document.querySelector("#uus_matk").value
    uusMatk = uusMatk.toLowerCase()
    console.log("Sisestati uus matk: " + uusMatk)
    if (!matkad.includes(uusMatk)) {
        matkad.push(uusMatk)
    }
    naitaMatkasid()
}

naitaMatkasid()