// Funcion para Iniciar Pagina
function startGame() {
    let sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'none'

    let sectionRestartGame = document.getElementById('restart')
    sectionRestartGame.style.display = 'none'

    let buttonCharacterPlayer = document.getElementById('button-character')
    buttonCharacterPlayer.addEventListener('click', chooseCharacterPlayer)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', attackFire)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', attackWater)
    let buttonAir = document.getElementById('button-air')
    buttonAir.addEventListener('click', attackAir)
    let buttonEarth = document.getElementById('button-earth')
    buttonEarth.addEventListener('click', attackEarth)

    let buttonRestart = document.getElementById('button-restart')
    buttonRestart.addEventListener('click', restartGame)
}

// function chooseCharacterPlayer() {
//     let sectionSelectCharacter = document.getElementById('select-character')
//     sectionSelectCharacter.style.display = 'none'
    
//     let sectionSelectAttack = document.getElementById('select-attack')
//     sectionSelectAttack.style.display = 'block'

//     let inputVulcano = document.getElementById('vulcano')
//     let inputNeptuno = document.getElementById('neptuno')
//     let inputAmón = document.getElementById('amón')
//     let inputEnki = document.getElementById('enki')
//     let spanCharacterPlayer = document.getElementById('character-player')

//     if (inputVulcano.checked) {spanCharacterPlayer.innerHTML = 'VULCANO'}
//     else if (inputNeptuno.checked) {spanCharacterPlayer.innerHTML = 'NEPTUNO'}
//     else if (inputAmón.checked) {spanCharacterPlayer.innerHTML = 'AMÓN'}
//     else if (inputEnki.checked) {spanCharacterPlayer.innerHTML = 'ENKI'}
//     else {alert("CHOOSE YOUR CHARACTER"); restartGame()}
    
//     chooseCharacterEnemy()
// }

// Utils
function Pagina(id) {
    
}









// Función para generar el dígito verificador
function generateVerifier() {
    let inputNumber = prompt("Ingrese el número para generar el dígito verificador:");
    if (inputNumber === null || inputNumber === "") return;

    let verifier = calculateVerifier(inputNumber);
    let formattedNumber = inputNumber + "-" + verifier;

    // Mostrar el número con su dígito verificador generado
    document.getElementById("output").innerText = "Número con Dígito Verificador: " + formattedNumber;
}

// Función para calcular el dígito verificador
function calculateVerifier(number) {
    let reversedNumber = number.split("").reverse().join("");
    let sum = 0;
    for (let i = 0; i < reversedNumber.length; i++) {
        let digit = parseInt(reversedNumber[i]);
        let multiplier = (i % 6) + 2;
        sum += digit * multiplier;
    }
    let remainder = sum % 11;
    let verifier = 11 - remainder;
    return verifier === 11 ? 0 : verifier;
}

// Función para verificar la existencia en la lista (no implementada)
function verifyExistence() {
    alert("Esta función aún no está implementada.");
}

// Función para mostrar el listado de números y dígitos verificadores
function showList() {
    let container = document.getElementsByClassName("form-generar")[0];

    if (container.style.visibility == "hidden") {
        container.style.visibility = "visible";
    } else {
        container.style.visibility = "hidden";
    }
}
