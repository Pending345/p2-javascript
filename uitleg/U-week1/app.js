//Dit is een array.
let sod1b = ["Arda", "Luke", "Stephen", "Azam", "Thygo"];

console.log(sod1b)

//Dit is een lega array.
let sod1a = [];

//push laat je items in een array zetten.
sod1a.push("Mike")
console.log(sod1a)

//specifieke van een array pakken.
console.log(sod1b[1])

document.getElementById("output").textContent = sod1b[3] + " is een student uit sod1b"

document.getElementById("studenten").textContent = "Er zitten " + sod1b.length + " studenten in mijn klas"

//hiermee wijzig je een item van een array.
sod1b[3] = "Jordan"
console.log(sod1b)