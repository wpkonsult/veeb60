let matkad = ['Jalgsimatk', 'Rattamatk', 'Süstamatk', 'Mägimatk']

function naitaMatkasid() {
    let tulemus = ""
    for (let index = 0; index < matkad.length; index++) {
        const element = matkad[index];
        tulemus = tulemus + "<div>" + element + '</div>'
    }
    document.querySelector("#matkad").innerHTML = tulemus
}

//naitaMatkasid()