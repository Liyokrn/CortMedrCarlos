//programa 1.- Lanzar un dado 2 veces y sumar las caras que cayeron, repetir esto 100 veces y mostrar al final cuantas veces cayó cada posible valor de la suma.
//programa 2.- Leer 10 calificaciones, mostrar el promedio y las calificaciones mayores al promedio

function dado (){ // entrega el resultado de 2 dados y los suma las caras que resultaron
    //cara 1                          //cara 2
let n = Math.floor((Math.random() * 6)) + Math.floor((Math.random() * 6)) ;
return n;}

let Num = [  ];
let Valores = [ v1, v2,v3]

//repiticion 100 veces guardando en un vector
for (let i = 0; i< 100; i++){

Num.push(dado());
console.log(  Num[i]);

//nota del algoritmo
/* un bojeto contendra los posib les valores de la suma de los dados que seria 2,3,4,5,6,7,8,9,10,11,12
y cada vez que caiga uno de esos resultados funcionara como un contador en el que 2 valdra cuantas veces cayo como suma 2
y asi con todos los numero posibles

}
//ordenar 
