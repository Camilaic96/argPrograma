/*
1. Hacer una cuenta regresiva desde 10, mostrando cada número,
y luego mostrar “Despegue!”.
2. Mostrar los primeros 20 números pares, separados por coma.
3. Mostrar los números pares menores a 30, separados por coma.
*/
/*
for(let i = 10; i > 0; i--) {
    document.write(i + ', ')
}
document.write('Despegue!')
*/
let j = 0
for(let i = 1; i < 100; i++) {
    if(j < 20 && i % 2 == 0) {
        console.log(i)
        j++
    }
    break
}

