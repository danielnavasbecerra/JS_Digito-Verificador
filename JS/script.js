// Funcion para cambiar entre paginas
function CambiarPagina() {
    let container = document.getElementsByClassName("form-generar")[0];

    if (container.style.visibility == "hidden") {
        container.style.visibility = "visible";
    } else {
        container.style.visibility = "hidden";
    }
}

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

// Función para mostrar el listado de números y dígitos verificadores (no implementada)
function showList() {
    alert("Esta función aún no está implementada.");
}
