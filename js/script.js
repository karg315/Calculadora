const display = document.getElementById("display");
const signo = document.getElementById("signo");
/* const cuenta = document.getElementById("cuenta"); Cuenta para la vr2.0*/

let numPrev = 0;
let numActual = 0;
let cantSignos = 0;

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
}

function añadir(numero) {
    if ((display.innerHTML == "Infinity") || (display.innerHTML == "NaN")) {
        display.innerHTML = numero;
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
    eliminar();
    if (op == 1) {        
        /* cuenta.innerHTML = numPrev; pa la 2.0 dije*/        
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
    cantSignos++;
}

function igual(){
    numActual = display.innerHTML;
    numPrev *= 1;
    numActual *= 1;
    if (signo.innerHTML == "+") {            
        fixADos(numPrev + numActual);
    } else if (signo.innerHTML == "-") {
        fixADos(numPrev - numActual);
    } else if (signo.innerHTML == "x") {
        fixADos(numPrev * numActual);
    } else if (signo.innerHTML == "÷") {
        fixADos(numPrev / numActual);
    } else if (signo.innerHTML == "^") {
        fixADos(Math.pow(numPrev, numActual));
    }
    signo.innerHTML = "=";
}

function decimal() {
    let str = display.innerHTML;
    if (!str.includes(".")) {
        display.innerHTML = str + ".";
    }
}

function fixADos(resultado) {
    let res = resultado;
    if (res.toString().includes(".")){
        display.innerHTML = res.toFixed(2);
    } else {
        display.innerHTML = res;
    }
}