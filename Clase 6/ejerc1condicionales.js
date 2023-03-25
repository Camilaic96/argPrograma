/*
Hacer un programa que:
● Pida un número (utilizando prompt)
● Si es mayor a cero mostrar “Número positivo”
● Si es menor a cero mostrar “Número negativo”
● Si es igual a cero mostrar “Es cero”
● Si no cumple ninguna mostrar “No es un número!”

Recordar: podemos usar document.write para mostrar en la página, alert para mostrar en un cartel emergente o console.log para mostrar por consola.
*/

let num = parseInt(prompt('Ingrese un número'))
let mensaje

if (num > 0) {
    mensaje = 'Número positivo'
} else if (num < 0) {
    mensaje = 'Número negativo'
} else if (num = 0) {
    mensaje = 'Es cero'
} else {
    mensaje = 'No es un número!'
}

document.write(mensaje)
console.log(mensaje)
alert(mensaje)