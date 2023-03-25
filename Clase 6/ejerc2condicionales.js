/*
Hacer un programa que:
● Pregunte si quiere recibir notificaciones por mail (utilizando confirm)
● Si dice que si:
○ Pida su email (utilizando prompt)
○ Pida su edad (utilizando prompt)
○ Si la edad es mayor o igual a 18: Mostrar el mail
○ Si No: Mostrar que “No tiene la edad suficiente”
*/

let confirmar = confirm('¿Quiere recibir notificaciones por mail?')
if (confirmar) {
    let mail = prompt('Ingrese su mail')
    let edad = parseInt(prompt('Ingrese su edad'))

    if (edad >= 18) {
        document.write(mail)
    } else {
        alert('No tiene la edad suficiente')
    }
}