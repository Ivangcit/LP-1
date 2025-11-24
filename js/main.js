const num1 = parseInt(prompt("Numero 1:"));
const num2 = parseInt(prompt("Numero 2:"));
const num3 = parseInt(prompt("Numero 3:"));


const arrNumeros = [num1, num2, num3];

if (num1 === num2 && num2 === num3) {
        
        console.log("Los tres números son iguale");
        
    }

function ordenar(arrNumeros) {
   

   

    const a = arrNumeros[0];
    const b = arrNumeros[1];
    const c = arrNumeros[2];

    let mayor = Math.max(a, b, c);
    let menor = Math.min(a, b, c); 
    let medio = a + b + c - mayor - menor;


    console.log(mayor, medio, menor);
    console.log(menor, medio, mayor);1

}
ordenar(arrNumeros);