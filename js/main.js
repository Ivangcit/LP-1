const arrNumeros=[];
arrNumeros.unshift(5);
arrNumeros.unshift(5);
arrNumeros.unshift(5);
console.log(arrNumeros[1]);



function ordenar(arrNumeros){
    let mayor=0;
    let medio=0;
    let menor=arrNumeros[0];

    if(arrNumeros[1]==arrNumeros[2]&&arrNumeros[2]==arrNumeros[3]){
    console.log("Los numeros son iguales")
}
    
    for(let i=0;i<3;i++){
        if(arrNumeros[i]>mayor){
            mayor=arrNumeros[i];
        }
    };

    for(let i=0;i<3;i++){
        if(arrNumeros[i]<menor){
            mayor=arrNumeros[i];
        }
    };

    for(let i=0;i<3;i++){
        if(arrNumeros[i]!=mayor&&arrNumeros[i]!=menor){
            medio=arrNumeros[i];
        }
    };

    console.log(mayor,medio,menor);
    console.log(menor,medio,mayor);

}
ordenar(arrNumeros);