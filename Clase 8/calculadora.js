const form = document.getElementById('formulario')
const contenedorMostrar = document.getElementById('mostrarDatos')

let inputNroUno
let nroUno
let inputNroDos
let nroDos

/*Para mostrar en el paso 2 con el botón de copiar
form.addEventListener('submit', e => {
    e.preventDefault()

    contenedorMostrar.innerHTML = `
            <p>Número 1: ${nroUno}</p>
            <p>Número 2: ${nroDos}</p>
        `
})
*/
const cargarDatos = () => {
    inputNroUno = document.getElementById('nro-1')
    nroUno = parseInt(inputNroUno.value)
    inputNroDos = document.getElementById('nro-2')
    nroDos = parseInt(inputNroDos.value)
}

const operacion = (operador) => {
    let resultado
    switch(operador) {
        case '+':
            resultado = nroUno + nroDos;
            break;
        case '-':
            resultado = nroUno - nroDos;
            break;
        case '*':
            resultado = nroUno * nroDos;
            break;
        case '/':
            resultado = nroDos !== 0 ? nroUno / nroDos
                : 'No se puede dividir por 0'
            break;
    };
    return resultado
}

const mostrarResultado = (resultado) => {
    contenedorMostrar.innerHTML = `
        <p>${resultado}</p>
    `
}

const realizarOperacion = (operador) => {
    cargarDatos()
    const resultado = operacion(operador);
    mostrarResultado(resultado)
}