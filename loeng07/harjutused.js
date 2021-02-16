let nimi = prompt("Sisesta enda nimi")

let index = 1;
while (index <= nimi.length) {
    console.log(index + ". kord")
    console.log("Veebilehte külastas " + nimi + " ja kiitis seda")
    index = index + 1
}

console.log("Ongi kõik while tsükliga")

console.log("Nüüd väljastame for tsükliga")


if (nimi.length <= 5) {
    console.log(nimi + " - õnnitlused - sul on ilus lühike nimi")
    for (let i = 1; i <= nimi.length; i++) {
        console.log(i + ". kord")
        console.log("Nimi: " + nimi);
    }
} else {
  console.log(nimi + " - sul on ilus pikk nimi")  
}

