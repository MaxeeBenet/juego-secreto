let numeroSecreto = 0;
let intentos = 0
let listaNumeroSorteados = [];
//let maximoIntentos = 3

//console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;    
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto); //=== <- valida valores y tipo de datos, necesitan ambas ser iguales.
    console.log(numeroDeUsuario);
    return numeroDeUsuario;
    */
   console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor');
        } else {
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
        //asignarTextoElemento('p', `Te quedan ${maximoIntentos - intentos} intentos`);
        
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    //valorCaja.value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //Si el numero generado esta incluido en la ultima posicion en la lista, hacemos una operacion, sino hacemos otra
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        //ingresamos en la lista push
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', "Indica un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



condicionesIniciales();
