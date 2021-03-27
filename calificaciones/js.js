//programa 2.- Leer 10 calificaciones, mostrar el promedio y las calificaciones mayores al promedio/


  //leer 10 calificaciones

let suma = 0, calf = [],s;
console.time("final");
for(let i=1;i <=10;i++){

    s = parseInt(prompt("introduce la calificacion numero " + i ));
    calf.push(s);
    
    
}
for (i=0;i<=calf.length;i++){
    suma +=  calf[i];
}
let promedio = suma /10;
let a1,a2,a3;
for (a1 = 1; a1 < calf.length; a1++) {
    for (i = 0; i < (calf.length - a1); i++) {
        if (calf[i] > calf[i + 1]) {
            a2 = calf[i];
            calf[i] = calf[i + 1];
            calf[i + 1] = a2;
        }
    }
}
console.log(calf);
console.timeEnd("final");

  
  document.write("El promedio es: " +promedio+ " <br> Los mayores al promedio son:" + calf[9]);
