// Vamos a clasificar las observaciones estelares que hemos hecho.

// en clEstelar está la clasificación de las estellas por su clase, temperatura y color asociado.
var clEstelar = [["O","B","A","F","G","K","M"],
                 [30000,20000,10000,7000,6000,4000,3000],
                 ["Azul","Blanco Azulado","Blanco", "Amarillo", "Naranja", "Rojo"]]

/* Tarea hagan un objeto (objClEstelar) que sea análogo al arreglo clEstelar. 
Este será un objeto que ctendrá los atributos: clase, temperatura y color.
Cada atributo tendrá un arreglo asociado según lo visto arriba. Si, será un objeto de arreglos. */

// Este arreglo tiene todas las observaciones realizadas en un periodo de tiempo.
// tiene temperatura de la estrella y su masa

var arrEstelar=[[35000,63],[18000,5],[5000,0.9]] 

// la siguiente función recibe un arreglo de la forma [temperatura, masa]
/* TAREA: hagan que la función reciba un arreglo del estilo arrEstelar, de longitu desconocida
 y retorne un arreglo con la clasificacion*/

function clasificaEstrellas(valorEstrellas){ //Solo un arreglo de la forma[a,b]

    temperatura = valorEstrellas[0]; 
    index = 0;

    for(j in clEstelar[1]){
        if(temperatura > clEstelar[1][j]){
            break;
        }
        index= index + 1;   
     }
     return(clEstelar[0][index]);  //Retorna la clase de la estrella
                                   // TAREA: hay una condicion de borde para temperaturas menores a 3000. Arreglen eso
}

/* SECCION DOS
En esta parte, voy a obtener un arreglo nuevo con la observacion de estrellas clasificadas.*/

var arrMisEstrellas = []; //Acá tendré todo clasificado

agregaEstrellas(arrEstelar);  // Invoco a la función que clasificará

function agregaEstrellas(miObservacion) {  //Recibo un arreglo con las observaciones del día
    estrella = [];

    for( i = 0; i<miObservacion.length; i++){    // TAREA: usen var y let j para ver el efecto de los dos for que tenemos acá.
        tipoEstrella = clasificaEstrellas(miObservacion[i]);
        estrella = [tipoEstrella,miObservacion[i][0],miObservacion[i][1]];
        arrMisEstrellas.push(estrella);// TAREA:Hagan return y armen este arreglo "fuera" de la funcion
        estrella=[];
    }
}

//Retorno arrmisEstrellas. 
arrMisEstrellas

/*Tarea: Haga una funcion que retorne, para cada observación de estrella ya calsificada, lo siguiente:

Mis observaciones:
clase:  X
temperatura: Y
masa: Z

(Con X,Y,Z los valores de cada observación contenido en arrMisEstrellas).
*/