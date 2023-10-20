function muunnaftoc(F)  {
    return F - 32 / 1.8
}

function muunnactof(C) {
    return C * 1.8 + 32
}

function muunnaftok(F1) {
    return F + 459.67 / 1.8
}
function muunnaktof(K) {
    return K * 1.8 - 459.67
}

function muunnaktoc(K1) {
    return K - 273,15
}

function muunnactok(C1) {
    return C + 273,15
}

function muunnaLampotila(){

    // hae käyttäjän syöttämä lämpötila
    const lampotila = document.getElementById("lampotila-input").value;
    console.log("Lämpölila-input", lampotila);

    // hae käyttäjän valitsema muunnos
    const muunnos = document.getElementById("muunnos").value;
    console.log("Muunnos:", muunnos);

    // kutsu oikeaa muunnosfunktiota
}