string de entrada = prompt("ingrese el número de la tarjeta de crédito");

funcion isValidCard(string de entrada)
array = Convierte string a array de strings
newArray = arreglo vacío
Recorrer array desde i=0; i= array.length; i++ para cambiar array[i] de string a numero

, siempre y array[i] no sea un vacío o letras. 
Guardar array [i] en newArray.
Si el array[i] está vacío o contine letras, retorna error y la función se detiene.
Si la función continua, recorrer newArray desde i=1; i= newArray.length; i = i+2 para acceder a newArray[i] en la posición par.
newArray [i] * 2 = dobleElemento 
Comprobar si dobleElemento >= 10, si esto es verdadero sumar los 2 números del resultado de la multiplicación y guardarlos en newArray[i].



Recorrer newArray desde i=0, i=newArray.length, i++ 
Suma = suma de todos los newArray[i]
Si suma % 10 === 0
, el número de la tarjeta es válida. Si no, el número de la tarjeta es inválida.



Llamar a la funcion
.