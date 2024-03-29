// Funcion para Iniciar Pagina

    let sectionVerificar = document.getElementById('verificar')
    sectionVerificar.style.display = 'none'

    let sectionMostrar = document.getElementById('mostrar')
    sectionMostrar.style.display = 'none'

    let buttonGenerateDigit = document.getElementById('button-generate')
    buttonGenerateDigit.addEventListener('click', generateDigit)

    let buttonVerifyExistence = document.getElementById('button-verificar')
    buttonVerifyExistence.addEventListener('click', verifyExistence)

    let buttonShowList = document.getElementById('button-mostrar')
    buttonShowList.addEventListener('click', showList)


// Funcion cambiar de secciones
function changePage(idLink, idHide, idShow) {
    let buttonLink = document.getElementById(idLink)
    buttonLink.addEventListener('click', hidePage(idHide), showPage(idShow))
}
function showPage(idShow) {
    let sectionShow = document.getElementById(idShow)
    sectionShow.style.display = 'block'
}
function hidePage(idHide) {
    let sectionHide = document.getElementById(idHide)
    sectionHide.style.display = 'none'
}

// Función para generar el dígito verificador
function generateDigit() {
    let inputNumber = document.getElementById('num-dig').value;
    if (inputNumber === null || inputNumber === "") return;

    let verifier = calculateVerifier(inputNumber);
    let formattedNumber = inputNumber + "-" + verifier;

    // Mostrar el número con su dígito verificador generado
    document.getElementById("digito_verificador").innerText = formattedNumber;
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
// function verifyExistence() {
//     alert("Esta función aún no está implementada.");
// }

// Función para mostrar el listado de números y dígitos verificadores
// function showList() {
//     let container = document.getElementsByClassName("form-generar")[0];

//     if (container.style.visibility == "hidden") {
//         container.style.visibility = "visible";
//     } else {
//         container.style.visibility = "hidden";
//     }
// }


