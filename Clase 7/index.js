const form = document.getElementById('formulario')

const filasTabla = document.getElementById('filasTabla')

console.log(nombre.value)

addEventListener('submit', e => {
    e.preventDefault()

    /*
    AGREGAR VALIDACIÓN FORMULARIO
    */

    let inputNombre = document.getElementById('nombre')
    const nombre = inputNombre.value
    let inputApellido = document.getElementById('apellido')
    const apellido = inputApellido.value
    let inputEdad = document.getElementById('edad')
    const edad = inputEdad.value
    let inputDni = document.getElementById('dni')
    const dni = inputDni.value
    let inputEmail = document.getElementById('email')
    const email = inputEmail.value

    const formValidado = (nombre, apellido, edad, dni, email) => {
        if(nombre.length < 2 || nombre.length >20) {
            alert('El nombre tiene que tener más de 2 caracteres y menos de 20')
            return false
        } 
        if(apellido.length < 2 || apellido.length >25) {
            alert('El apellido tiene que tener más de 2 caracteres y menos de 25')
            return false
        }
        if(edad < 18 || edad > 120) {
            alert('Tiene que ser mayor de 18 años')
            return false
        }
        if(dni.length <= 6 ) {
            alert('Dni inválido. Ingrese más de 6 caracteres')
            return false
        }
        if(email === '') {
            alert('Ingrese el email')
            return false
        }
        return true
    }
    const valido = formValidado(nombre, apellido, edad, dni, email)
    if(valido) {
        filasTabla.innerHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${edad}</td>
                <td>${dni}</td>
                <td>${email}</td>
            </tr>
        `
        
        inputNombre.value = ''
        inputApellido.value = ''
        inputEdad.value = ''
        inputDni.value = ''
        inputEmail.value = ''
    }    
})