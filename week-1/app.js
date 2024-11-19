let winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"]

//Opdracht 1
document.getElementById("opdr1").textContent = "Er zitten " + winkelmand.length + " producten in uw winkelmand"

//Opdracht 2
document.getElementById("opdr2").textContent = "Uw producten zijn: " + winkelmand

//Opdracht 3
document.getElementById("opdr3").textContent = winkelmand[3] + ", staat op de vierde plek in uw winkelmand"

//Opdracht 4
winkelmand[1] = "Bier"
document.getElementById("opdr4").textContent = winkelmand[1]

//Opdracht 5
function product_toevoegen() {
    winkelmand.push("Melk")
    document.getElementById("opdr5").textContent = winkelmand[5]
}

//Opdracht 6
if(winkelmand.length >= 1) {
    document.getElementById("opdr6").textContent = "U kunt boodschappen doen"
}
else {
    document.getElementById("opdr6").textContent = "U heeft niets om te kopen"
}

//Opdracht 7
if(winkelmand[4] == "Drop") {
    document.getElementById("opdr7").textContent = winkelmand
}
else {
    document.getElementById("opdr7").textContent = "U heeft geen drop"
}

//Opdracht 8
document.getElementById("opdr8").textContent = winkelmand.join(", ")

//Opdracht 9
document.getElementById("opdr9.1").textContent = winkelmand
winkelmand.splice(0, 2)
document.getElementById("opdr9.2").textContent = winkelmand

//Opdracht 10
winkelmand.push("Bananen", "Bier")
winkelmand.sort()
document.getElementById("opdr10").textContent = winkelmand
