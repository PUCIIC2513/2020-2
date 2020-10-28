
/**************************************************************************************************************
Pequeño programa que mezcla HTML con JS y CSS
Es una página que genera listas (tareas, compras, actividades, etc.)
El propósito es controlar las tareas y marcar las que se encuentran realizadas y posteriormente borrarlas.
Para esto:
1.- se pueden agregar elementos a la lista ordenada.
2.- Se pueden tachar elementos para que puedan ser borrados
3. Se puede grabar localmente la lista con lo cual la lista es persistente.
**************************************************************************************************************/

/*
En nuestro HTML tenemos: <button id="Nuevo elemento" class="estiloBoton">Nueva Línea</button>
pues obtenemos ese elemento en JavaScript por su id en el HTML y lo asociamos a una variable.
para eso, la magia la hace "document.getElementById.
*/

// Acá hay una cosa que debemos hacer antes que nada :-)


//Aplicamos magia al resto de los botones. que son "Borrar-marcados", "Guardar", "Limpiar"


/* 
Para saber cuando se hace click en el botón, hay que asociar ese elemento (nuevoElemento) a un "listener"
Este "listener" estará escuchando hasta que alguien haga algo, en particular lo asociamos  al "click"
Al hacer "click", se llama a la función que está declarada, en este caso "agregaElemento"
la magia lo hace el método addEventListener que recibe el evento y la función a invocar cuando ocurra el evento.
*/



//Escuchamos al resto de los botones.


/* función agregaElemento()
El objetivo es leer lo que hay en el input y agregar una nueva línea a la lista que tenemos.
por lo tanto, hacemos lo que todo programador haría, obtener el objeto input y asociarlo a una variable.
Ya sabemos que los document.getElementById hacen ese trabajo.
Ahora podemos programar la función qu está asociada al listener de más arriba, es decir:
   agregaElemento().
Esta funcion, obtiene el texto e invoca a la función que realmente hará el trabajo:
   nuevaEntradaEnLista()
*/


//function agregaElemento() {

    
  //  nuevaEntradaEnLista(textoEnElemento, false);
//}


//function nuevaEntradaEnLista(varTexto, varBorrable) {

/* En el HTML que tenemos hay una lista ordenada que está incialmente vacia:
   <ol id="lista ordenada"></ol>

Por lo tanto será a esa lista a la que le iremos agregando nuevos elementos <li>
Para agregar elementos (o sea, mas <li>) se crea un elemento con:
   createElement("li")
creado el elemento se le añade a la lista ordenada que tenemos..con el método appendChild

La "lista ordenada" la asociamos a una variable:
*/



	//La lista se creará como lista ordenada. Se añade un elemento "li" pues hay una nueva linea/elemento.

    

    /*
    En JavaScript, un textNode es un contenedor para texto que se asociará a un elemento HTML.
    En este caso, el nodo se cargará con la información del parámetro "varTexto"
    */

    
    
    // Tenemos este nuevo elemento "li" y nuestro nodo de texto lo añadimos al elemento. es algo asi como decir <li> = "texto"
    
       
/*
    if (varBorrable) {

    	//Si el valor es verdadero, se le aplica a <li> el estilo definido por la clase .borrable del archivo .css 
    	// Llamemos a esto un "truco" de programación :-)
    	    	
        nuevoElemento.classList.add("borrable");
    }
*/

    //El elemento <li> se añade o inserta en la listaordendad (que es el <ol>).

    /*
    Como la idea es además "escuchar" si nos hacen doble click para marcar el elemento como "borrable" hay que añadir un listener para 
    saber que hacer en el caso de doble click, que se escribe "dblclick"
    */

    //Si hago dobleClick, cambio estado de completado a no y viceversa.
//} //Fin function nuevaEntradaEnLista



/*
función cambiaEstado Cambiar estados de <li> entre  borrable y no borrable.
============================================================================

Sabemos que un <li> es borrable si tiene el estilo agregado (.borrable), asi que ese indicador hay que capturarlo antes de borra elementos. 

Si damos doble click y no era borrable, se deja el estilo con la clase borrable y viceversa.
Para saber a qué elemento de la lista se le hizo el doble click y trabajar sobre ese elementos, se utiliza THIS.

Como cada elemento tiene su listener, cuando ese listener escucha el dble click, pasa el objeto vinculandolo con ese "gancho": this.
Algo como decir: A "este" le dieron doble click.
*/

/****
function cambiaEstado() {

    if (this.classList.contains("borrable")) {

    	// como era borrable, le sacamos de esa clase.
        this.classList.remove("borrable");

    } 

    else {

    	// No tenia la clase borrable, se la agregamos a su lista de clases.
        this.classList.add("borrable");
    }
}
****/

//La siguiente funcion, Borra los elementos con clase borrable.


//function borraElemento() {


   //var lista = document.getElementById("lista ordenada");

	//El truco es ver cuales elementos de "lista", (en nuestro HTML "lista ordenada") tienen asociada la clase "borrable"
    

  //Los borramos uno a uno, siempre el "primer elemento" será borrado y luego se continua hasta quedar sin elementos.

   

//} //Fin función borraElemento()


/*
Ahora almacenemos la lista (pero no usaremos ninguna BDD)
Para hacer esto usaremos un almacenaje llamado LocalStorage...que eso es equivalente a almacenar en el cliente.
Esto,¿tiene persistencia?, ¿si cierro el browser que pasa? ... veamos.

Primero: almacenemos la lista y para eso usaremos un objeto Array() y su metodo push() que ya vimos.
Luego una funcion recorrerá el arreglo y grabará. 
*/

//function guardaElementos() {

    //var arrGrabar = new Array(); //El arreglo que guardará los elementos grabables.

    //var listaOrdenada = document.getElementById("lista ordenada"); // La lista ordenada <ol> que tiene elementos guardables.

    
    //for(){

          //var elementoLI //Obtengo el <li> del <ol>

        //var objInfoParaGrabar = {
             //innerText...eso es nuevo.
            // si el li está con estado "borrable".
       // };  //Se crea un objeto con la información a guardar. Por lo tanto el arreglo es un array de objetos.

        //arrGrabar.push(objInfoParaGrabar); //se agrega al arreglo.

    //}//fin del for

    //El metodo stringyfy transforma arreglo a strings.

    //localStorage.setItem("Listado", JSON.stringify(arrGrabar)); // He acá la magia del localStorage y su metodo setItem.
    
//} //fin function guardaElementos()

//Si tenemos algo grabado, queremos recuperarlo antes de empear a trabajar en nuestro listado ordenado.

/*
function cargarListado() { 

  if (localStorage.getItem("Listado") != null) {
  	
      var Listado = JSON.parse(localStorage.getItem("Listado")); //Este parse? TAREA: lean de parse y stringify tambien y de JSON.algo 

        for (var i = 0; i < Listado.length; i++) {
             
             var elementoLI = Listado[i];  // el elementoLI es un objeto, no olvidar.

             // En el fondo, leemos todo lo almacenado y vamos automáticamente generando los <li> con la función inventada para eso.
             nuevaEntradaEnLista(elementoLI.elemento, elementoLI.borrable);
        }
    }
}
*/

/*
>>>>>>>>>>>>>>>>>>>>>>>>> TAREA: Realice las siguientes mejoras:
                                 1. Implemente el botón que borra y limpia todo, incluso lo grabado.
                                 2. Cada vez que se agrega un elemento, se borra el input
                                 3. Si el input está vacío, no carga un nuevo elemento (li)
                                 4. Implemente un área de texto para incluir los siguientes mensajes:
                                    1) Está seguro que quiere borrar los elementos marcados?
                                      1.1) El mensaje (NO debe ser de tipo alert) tendrá un botón de Aceptar
                                           y otro de rechazar (obvio lo que hacen)
                                      1.2) Dele un estilo a los nuevos botones y al área donde se desplegarán los mensajes
                                    2) Quiere mantener este listado o empezar uno nuevo?
                                      2.1) dos botones: Mantener y Nuevo Listado
                                      2.2) Dele estilo a los nuevos botones del mensaje
                                      NOTA: al elegir opciones de los mensajes, el mensaje debe borrarse
>>>>>>>>>>>>>>>>>>>>>>>>> FIN TAREA
*/