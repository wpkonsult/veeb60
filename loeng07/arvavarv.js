//let varv = "--"
//while (varv != "kollane") {
//    varv = prompt("Arva ära minu lemmikvärv?")
//    console.log("Arvati värvi: " + varv)
//}

let varv = prompt("Arva ära minu lemmikvärv?")
let varvid = ['sinine', 'kollane', 'punane', 'roheline']
for (let i = 0; i < varvid.length; i++) {
    console.log('Kontrollin värvi: ' + i)
    if (varvid[i] == varv) {
        console.log('Õnnitlused - arvasid ära värvi ' + varvid[i])
    } else {
        console.log('Ilus värv: ' + varvid[i])
    }
}
console.log("Ongi kõik")