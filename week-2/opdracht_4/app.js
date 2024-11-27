//Opdracht1
//const resultsElement = document.getElementById("output");
//let results = "";

//for (let i = 0; i <= 10; i++) {
//    results += `${i} x ${multiplier} = ${i * multiplier}\n`;
//}

//resultsElement.textContent = results;

//Opdracht2
//function generateResults(multiplier) {
//    const resultsElement = document.getElementById("output");
    
//    let results = "";
//    for (let i = 0; i <= 10; i++) {
//        results += `${i} x ${multiplier} = ${i * multiplier}\n`;
//    }

//    resultsElement.textContent = results;
//}

//generateResults(10);

//Opdracht3
function tafel_van() {
    const number = document.getElementById("numberInput").value;
    const resultsElement = document.getElementById("output");
    resultsElement.textContent = "";

    let results = "";
    for (let i = 0; i <= 10; i++) {
        results += `${i} x ${number} = ${i * number}\n`;
    }
    resultsElement.textContent = results;
}