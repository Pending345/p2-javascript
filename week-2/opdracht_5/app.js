const verlanglijst = ["Nieuwe Spel", "Dungeons and Dragons Boek", "Koptelefoon", "Tekenpotloden", "Tekentablet"];

const verlanglijstWeergave = document.getElementById("output");

for (let i = 0; i < verlanglijst.length; i++) {

    const item = document.createElement("li");
    item.textContent = verlanglijst[i];
    verlanglijstWeergave.appendChild(item);
}