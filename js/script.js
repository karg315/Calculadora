const display = document.getElementById("display");
const signo = document.getElementById("signo");
const cuenta = document.getElementById("cuenta");
const deci = document.getElementById("nmrDecimales");

let numPrev = 0;
let numActual = 0;
let contOperacion = false;

function getDisplay() {
    let str = display.innerHTML;
    arr = str.split("");
    return arr
}

function setDisplay(arr) {
    let res = arr.toString();
    res = res.replace(/,/g,"");
    if (res == ""){
        res = 0;
    }
    
    display.innerHTML = res;
}

function borrar() {
    if ((display.innerHTML == "Infinity") || (display.innerHTML == "NaN")){
        eliminar();
    } else if (display.innerHTML != 0) {
        let res = getDisplay()
        res.pop();
        setDisplay(res);
    }
}

function eliminar() {
    display.innerHTML = 0;
    signo.innerHTML = "";
    numPrev = 0;
    cuenta.innerHTML = 0;
}

function añadir(numero) {
    if ((display.innerHTML == "Infinity") || (display.innerHTML == "NaN") || (contOperacion)) {
        display.innerHTML = numero;
        contOperacion = false;
    } else if ((display.innerHTML != 0) || (display.innerHTML == "0.")) {
        let res = getDisplay();
        res.push(numero);
        setDisplay(res);
    } else {
        display.innerHTML = numero;
    }
}

function operacion(op) {    
    numPrev = display.innerHTML;
    numPrev *= 1;
    cuenta.innerHTML = numPrev;
    display.innerHTML = 0;
    if (op == 1) {                      
        signo.innerHTML = "+";
    } else if (op == 2) {
        signo.innerHTML = "-";
    } else if (op == 3) {
        signo.innerHTML = "x";
    } else if (op == 4) {
        signo.innerHTML = "÷";
    } else {
        signo.innerHTML = "^";
    }
    contOperacion = true;
}

function igual(){
    numActual = display.innerHTML;
    numPrev *= 1;
    numActual *= 1;
    if (signo.innerHTML == "+") {
        fixDisplay(numPrev + numActual);
    } else if (signo.innerHTML == "-") {
        fixDisplay(numPrev - numActual);
    } else if (signo.innerHTML == "x") {
        fixDisplay(numPrev * numActual);
    } else if (signo.innerHTML == "÷") {
        fixDisplay(numPrev / numActual);
    } else if (signo.innerHTML == "^") {
        fixDisplay(Math.pow(numPrev, numActual));
    }
    signo.innerHTML = "=";    
}

function decimal() {
    let str = display.innerHTML;
    if (!str.includes(".")) {
        display.innerHTML = str + ".";
    }
}

function fixDisplay(resultado) {
    let decimales = deci.value;
    let res = resultado;
    if (res.toString().includes(".")){
        display.innerHTML = res.toFixed(decimales);
    } else {
        display.innerHTML = res;
    }
}

function fixCuenta(resultado) {
    let decimales = deci.value;
    let res = resultado;
    if (res.toString().includes(".")){
        cuenta.innerHTML = res.toFixed(decimales);
    } else {
        cuenta.innerHTML = res;
    }
}